"""Validate the generated resume's facts, links, page count and reading order."""
import sys
import json
import re
from pathlib import Path
import unicodedata
from pypdf import PdfReader

reader = PdfReader(sys.argv[1] if len(sys.argv) > 1 else "public/assets/files/PHAMT_RESUME.pdf")
assert len(reader.pages) == 3, f"Expected three pages, found {len(reader.pages)}"
text = unicodedata.normalize("NFKC", "\n".join(page.extract_text() for page in reader.pages))
sections = [
    "PROFESSIONAL SUMMARY", "TECHNICAL SKILLS", "PROFESSIONAL EXPERIENCE",
    "SELECTED SOFTWARE PROJECTS", "EDUCATION", "CERTIFICATIONS",
]
positions = [text.index(section) for section in sections]
assert positions == sorted(positions), "Sections are extracted out of order"
jobs = [
    ("Amdocs", "Lead Craft CMS developer"),
    ("Linchpin", "Led development and maintenance of WordPress"),
    ("Planit Advertising", "Built custom WordPress sites"),
    ("Holmes Millet Advertising", "Designed, developed, and maintained responsive sites"),
    ("Pixel Clear Designs", "Designed and developed WordPress"),
    ("Ross & Matthews Law Firm", "Resolved help desk tickets"),
    ("E-lite Works", "Handled Windows PC repair"),
]
previous = positions[2]
for index, (employer, bullet) in enumerate(jobs):
    heading = text.index(employer, previous)
    content = text.index(bullet, heading)
    next_heading = text.index(jobs[index + 1][0], heading) if index + 1 < len(jobs) else positions[3]
    assert heading < content < next_heading, f"{employer} bullets are separated from their heading"
    previous = content
# Check every shared job description and achievement survives PDF generation.
source = (Path(__file__).resolve().parents[1] / "src/views/Resume/resume-data.ts").read_text()
history = source.split("export const experience = [", 1)[1].split("export const education", 1)[0]
compact = lambda value: "".join(unicodedata.normalize("NFKC", value).split())
for block in history.split("bullets: [")[1:]:
    bullets, rest = block.split("]", 1)
    strings = re.findall(r'"(?:[^"\\]|\\.)*"', bullets)
    achievement = re.search(r'achievement:\s*("(?:[^"\\]|\\.)*")', rest)
    assert achievement, "Missing job achievement in source"
    for raw in [*strings, achievement.group(1)]:
        value = json.loads(raw)
        assert compact(value) in compact(text), f"Missing job detail: {value}"
assert text.count("Key achievement:") == 7, "Expected an achievement for all seven jobs"
for term in ["Python", "Go (Golang)", "Rust", "ByteDown", "SitePaladin", "Hook, Line & Sender", "Daguerrify", "Redis", "ISR"]:
    assert term in text, f"Missing {term}"
links = []
for page in reader.pages:
    for annotation in page.get("/Annots", []):
        action = annotation.get_object().get("/A", {})
        uri = action.get("/URI")
        if uri:
            links.append(str(uri).rstrip("/"))
for uri in [
    "https://tampham.io",
    "https://github.com/openbracketdevelopment/ByteDown",
    "https://github.com/openbracketdevelopment/SitePaladin",
    "https://github.com/openbracketdevelopment/hookline-and-sender",
    "https://github.com/openbracketdevelopment/Daguerrify",
]:
    assert uri in links, f"Missing PDF link: {uri}"
print("PASS: three pages; all job descriptions and achievements, reading order, project evidence and PDF links.")
