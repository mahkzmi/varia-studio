import { useEffect } from "react";
import { siteConfig as c } from "./data/siteConfig";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Work from "./components/Work";
import Method from "./components/Method";
import Studio from "./components/Studio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    const vars = {
      "--color-bg": c.theme.background,
      "--color-panel": c.theme.panel,
      "--color-panel-raised": c.theme.panelRaised,
      "--color-text": c.theme.text,
      "--color-muted": c.theme.muted,
      "--color-accent": c.theme.accent,
      "--color-accent-strong": c.theme.accentStrong,
      "--color-line": c.theme.line
    };
    Object.entries(vars).forEach(([key, value]) => root.style.setProperty(key, value));
    document.title = `${c.brand.name} — Intelligence, grounded.`;
  }, []);

  return <div className="min-h-screen bg-ink text-paper">
    <Navbar />
    <main><Hero /><Intro /><Work /><Method /><Studio /><Contact /></main>
    <Footer />
  </div>;
}
