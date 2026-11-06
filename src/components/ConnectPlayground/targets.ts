export const destinations = [
  { id: "email", number: "01", name: "The inbox", label: "Email", projectile: "paper football", action: "Open email", href: "mailto:phamt@live.com?subject=Let%27s%20make%20something%20great", description: "A good conversation starts here." },
  { id: "github", number: "02", name: "Nothing but net", label: "GitHub", projectile: "basketball", action: "Visit GitHub", href: "https://github.com/openbracketdevelopment", description: "A few things I've been building." },
  { id: "linkedin", number: "03", name: "Right on target", label: "LinkedIn", projectile: "dart", action: "Visit LinkedIn", href: "https://www.linkedin.com/in/tamphamjr/", description: "Let's connect the dots." },
] as const;
export type GameState = "loading" | "ready" | "aiming" | "flying" | "hit" | "miss" | "unavailable";
