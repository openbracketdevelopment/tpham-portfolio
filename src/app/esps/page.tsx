import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/Esps.json";
import Page from "../../projects/Esps/Esps";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
