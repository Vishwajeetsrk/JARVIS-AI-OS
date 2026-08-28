import { PROJECTS } from "../constants";
import { FadeIn } from "./FadeIn";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-canvas px-5 pb-24 pt-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-32 md:pt-20"
    >
      <FadeIn className="mb-12 text-center md:mb-16">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.num} project={project} index={index} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
