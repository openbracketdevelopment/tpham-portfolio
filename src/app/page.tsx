import { buildMetadata } from "../lib/metadata";
import data from "../views/page-data/Home.json";
import Page from "../views/Home/Home";

export const metadata = buildMetadata(data);

// ISR: regenerate in the background at most once per hour
export const revalidate = 3600;

export default function Route() {
  return <Page />;
}
