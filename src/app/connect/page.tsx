import { buildMetadata } from "../../lib/metadata";
import { ConnectPlayground } from "../../components/ConnectPlayground/ConnectPlayground";

export const metadata = buildMetadata({
  pageTitle: "Connect Playground | Tam Pham",
  pageDescription: "A little play, a good conversation. Throw a paper football, basketball, or dart into Tam Pham's interactive 3D contact playground, or connect directly by email, GitHub, and LinkedIn.",
  canonical: "/connect",
});

export default function ConnectPage() {
  return <ConnectPlayground />;
}
