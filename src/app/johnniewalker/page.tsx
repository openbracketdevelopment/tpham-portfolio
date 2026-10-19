import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/JohnnieWalker.json";
import Page from "../../projects/JohnnieWalker/JohnnieWalker";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
