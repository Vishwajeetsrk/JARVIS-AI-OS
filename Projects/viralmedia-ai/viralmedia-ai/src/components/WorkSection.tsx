import { motion } from "motion/react";
import { PROJECTS } from "../constants";

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24 bg-background py-32 pb-16 px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl md:text-5xl font-medium tracking-[-2px] text-foreground mb-4">
          Selected <span className="font-accent italic font-normal">Work</span>
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          A curated collection of projects where bold design meets intelligent technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="liquid-glass aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-medium text-foreground font-body">{project.title}</h3>
              <p className="text-sm text-muted-foreground font-body mt-1">{project.category}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
