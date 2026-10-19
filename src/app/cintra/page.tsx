import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/Cintra.json";
import Page from "../../projects/Cintra/Cintra";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
