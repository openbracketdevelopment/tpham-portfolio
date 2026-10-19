import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/Baileys.json";
import Page from "../../projects/Baileys/Baileys";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
