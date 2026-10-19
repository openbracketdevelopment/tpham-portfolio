import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/Mwr.json";
import Page from "../../projects/Mwr/Mwr";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
