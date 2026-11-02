import { notFound } from "next/navigation";
import { WorkCollection } from "../../../components/Work/WorkCollection";
import { SoftwareCaseStudy } from "../../../components/Work/SoftwareCaseStudy";
import { collections } from "../../../projects/work-data";
import { softwareProjects } from "../../../projects/software-data";
import { buildMetadata } from "../../../lib/metadata";

export function generateStaticParams() {
  return [...collections, ...softwareProjects].map(item => ({ slug: item.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = collections.find(item => item.id === slug);
  const project = softwareProjects.find(item => item.id === slug);
  if (!collection && !project) notFound();
  return buildMetadata({
    pageTitle: `${collection?.name ?? project?.name} | Tam Pham`,
    pageDescription: collection?.description ?? project?.summary ?? "",
    canonical: `/work/${slug}`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = collections.find(item => item.id === slug);
  if (collection) return <WorkCollection collection={collection.id} />;
  const project = softwareProjects.find(item => item.id === slug);
  if (!project) notFound();
  return <SoftwareCaseStudy project={project} />;
}
