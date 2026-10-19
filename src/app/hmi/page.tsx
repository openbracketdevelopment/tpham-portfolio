import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/Hmi.json";
import Page from "../../projects/Hmi/Hmi";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
