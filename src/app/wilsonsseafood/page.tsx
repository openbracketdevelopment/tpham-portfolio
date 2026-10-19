import { buildMetadata } from "../../lib/metadata";
import data from "../../projects/project-data/WilsonsSeafood.json";
import Page from "../../projects/WilsonsSeafood/WilsonsSeafood";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
