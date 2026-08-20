import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { PROJECTS } from "../constants";
import { LiveProjectButton } from "./LiveProjectButton";

type Project = (typeof PROJECTS)[number];

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
};

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh]">
      <motion.article
        style={{ scale, top: index * 28 }}
        className="sticky top-24 flex h-full flex-col rounded-[40px] border-2 border-mist bg-canvas p-4 sm:top-32 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-col gap-6 border-b border-mist/20 pb-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-wrap items-end gap-4 md:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.num}
            </span>
            <div>
              <p className="text-sm uppercase tracking-widest text-mist/70">{project.category}</p>
              <h3
                className="hero-heading font-black uppercase"
                style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton className="shrink-0 self-start md:self-center" />
        </div>

        <div className="mt-4 flex flex-1 flex-col gap-3 sm:mt-6 md:flex-row md:gap-4">
          <div className="flex w-full flex-col gap-3 md:w-[40%]">
            <img
              src={project.col1[0]}
              alt=""
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
              loading="lazy"
            />
            <img
              src={project.col1[1]}
              alt=""
              className="w-full flex-1 rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
              loading="lazy"
            />
          </div>
          <img
            src={project.col2}
            alt=""
            className="w-full flex-1 rounded-[40px] object-cover sm:rounded-[50px] md:w-[60%] md:rounded-[60px]"
            loading="lazy"
          />
        </div>
      </motion.article>
    </div>
  );
}
