import { buildMetadata } from "../../lib/metadata";
import data from "../../views/page-data/Resume.json";
import Page from "../../views/Resume/Resume";

export const metadata = buildMetadata(data);

// ISR: regenerate in the background at most once per hour
export const revalidate = 3600;

export default function Route() {
  return <Page />;
}
