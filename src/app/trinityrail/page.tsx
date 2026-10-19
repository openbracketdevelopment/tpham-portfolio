import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/Trinity.json";
import Page from "../../projects/Trinity/Trinity";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
