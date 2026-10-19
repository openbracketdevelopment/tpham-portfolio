import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/Mwr.json";
import Page from "../../projects/Mwr/Mwr";

export const metadata = buildMetadata(data);

// ISR: regenerate in the background at most once per hour
export const revalidate = 3600;

export default function Route() {
  return <Page />;
}
