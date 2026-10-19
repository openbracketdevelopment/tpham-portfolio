import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/Earthx.json";
import Page from "../../projects/EarthX/EarthX";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
