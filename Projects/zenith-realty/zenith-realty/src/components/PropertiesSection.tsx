import { motion } from "motion/react";
import { PROPERTIES } from "../constants";
import { PropertyCard } from "./PropertyCard";

export function PropertiesSection() {
  return (
    <section id="properties" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-12">
          <h2
            className="text-3xl font-medium leading-[1.1] tracking-tight text-[#141414] md:col-span-8 md:text-5xl"
            data-editable
            data-preset-text="properties-headline"
          >
            Guiding you toward the residence of your dreams
          </h2>
          <p
            className="text-[14px] leading-relaxed text-[#A5A5A5] md:col-span-4 md:col-start-9"
            data-editable
            data-preset-text="properties-subcopy"
          >
            Our vision bridges balance, design, and attention so that every client resides in a
            space reflecting their values.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {PROPERTIES.map((property, i) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
