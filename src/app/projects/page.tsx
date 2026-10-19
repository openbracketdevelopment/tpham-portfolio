import Projects from "../../views/Projects/Projects";

export const metadata = { title: "Projects" };

// ISR: regenerate in the background at most once per hour
export const revalidate = 3600;

export default function Route() {
  return <Projects />;
}
