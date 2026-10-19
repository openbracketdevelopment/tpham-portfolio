import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/CrownRoyal.json";
import Page from "../../projects/CrownRoyal/CrownRoyal";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
