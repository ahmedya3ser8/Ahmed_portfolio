import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Technologies from "./Technologies";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="max-w-screen-2xl mx-auto antialiased overflow-x-hidden bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-neutral-300 min-h-screen px-4 lg:px-12">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </>
  )
}
