import { buildMetadata } from "../lib/metadata";
import data from "../views/page-data/Home.json";
import Page from "../views/Home/Home";

export const metadata = buildMetadata(data);

export default function Route() {
  return <Page />;
}
