export const site = {
  name: "Lannon Khau",
  title: "Lannon Khau — Full-Stack AI/ML Engineer",
  description:
    "Full-stack AI/ML engineer building production systems that think, learn, and ship — document intelligence pipelines, RAG agents, and AI-powered workflows.",
  url: "https://lannonkhau.com",
  email: "khaulannon@gmail.com",
  github: "https://github.com/LannonTheCannon",
  linkedin: "https://www.linkedin.com/in/lannon-khau/",
  youtube: "https://www.youtube.com/@LannonKhau",
  taglines: {
    hero: "From prototype to production, tell your story.",
    sub: "Building with intention, curiosity, and a quiet fire to explore the unknown.",
    identity: "Engineer. Builder. Explorer.",
    mission:
      "I build AI-powered systems that turn raw data into insight, clarity, and production-grade tools.",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/blog/", label: "Blog" },
  { href: "/#contact", label: "Contact" },
] as const;
