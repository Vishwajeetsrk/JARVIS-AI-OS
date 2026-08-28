import PageShell from "../components/PageShell";
import { COURSES } from "../constants";

export function CoursesPage() {
  return (
    <PageShell
      eyebrow="Courses"
      title="Programs built for modern product teams"
      description="Choose a track aligned with your career stage. Each cohort includes live critiques, async labs, and a hiring-ready capstone."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {COURSES.map((course) => (
          <article
            key={course.title}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-wider text-white/50">
              <span>{course.duration}</span>
              <span>{course.level}</span>
            </div>
            <h2 className="mt-4 text-xl font-medium tracking-tight">{course.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">{course.desc}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
