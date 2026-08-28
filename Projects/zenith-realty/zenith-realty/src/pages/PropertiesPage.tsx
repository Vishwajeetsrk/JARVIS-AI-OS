import { motion } from "motion/react";
import { PageShell } from "../components/PageShell";
import { PropertyCard } from "../components/PropertyCard";
import { PROPERTIES } from "../constants";

export function PropertiesPage() {
  return (
    <PageShell
      title="Curated properties"
      subtitle="Browse residences selected for design integrity, location, and long-term value."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...PROPERTIES, ...PROPERTIES].map((property, i) => (
          <motion.div
            key={`${property.title}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
          >
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
