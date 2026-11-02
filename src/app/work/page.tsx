import { WorkCollection } from "../../components/Work/WorkCollection";
import { buildMetadata } from "../../lib/metadata";

export const metadata = buildMetadata({
  pageTitle: "All Work | Tam Pham",
  pageDescription: "Professional web platforms, independent software projects and video work by Tam Pham.",
  canonical: "/work",
});

export default function Page() {
  return <WorkCollection />;
}
