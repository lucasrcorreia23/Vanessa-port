import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { Hero } from "@/components/Hero";
import { ProjectList } from "@/components/ProjectList";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <ProjectList />
      <Contact />
    </>
  );
}
