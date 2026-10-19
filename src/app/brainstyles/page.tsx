import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/BrainStyles.json";
import Page from "../../projects/BrainStyles/BrainStyles";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
