import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/Diageo.json";
import Page from "../../projects/Diageo/Diageo";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
