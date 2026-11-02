"""Validate the generated resume's facts, links, page count and reading order."""
import sys
import unicodedata
from pypdf import PdfReader

reader = PdfReader(sys.argv[1] if len(sys.argv) > 1 else "public/assets/files/PHAMT_RESUME.pdf")
assert len(reader.pages) == 2, f"Expected two pages, found {len(reader.pages)}"
text = unicodedata.normalize("NFKC", "\n".join(page.extract_text() for page in reader.pages))
sections = [
    "PROFESSIONAL SUMMARY", "TECHNICAL SKILLS", "PROFESSIONAL EXPERIENCE",
    "SELECTED SOFTWARE PROJECTS", "EDUCATION", "CERTIFICATIONS",
]
positions = [text.index(section) for section in sections]
assert positions == sorted(positions), "Sections are extracted out of order"
jobs = [
    ("Amdocs", "Lead development of a headless Craft CMS"),
    ("Linchpin", "Led WordPress development"),
    ("Planit Advertising", "Built custom WordPress sites"),
    ("Holmes Millet Advertising", "Led the interactive department"),
    ("Pixel Clear Designs", "Delivered WordPress/PHP sites"),
    ("Ross & Matthews Law Firm", "Administered Active Directory"),
    ("E-lite Works", "Built and repaired desktop PCs"),
]
previous = positions[2]
for index, (employer, bullet) in enumerate(jobs):
    heading = text.index(employer, previous)
    content = text.index(bullet, heading)
    next_heading = text.index(jobs[index + 1][0], heading) if index + 1 < len(jobs) else positions[3]
    assert heading < content < next_heading, f"{employer} bullets are separated from their heading"
    previous = content
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
print("PASS: two pages; sections, employer bullets, language/project evidence and PDF links.")
