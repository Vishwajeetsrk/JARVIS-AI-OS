import { CaseStudiesSection } from "../components/CaseStudiesSection";

export function ProjectsPage() {
  return (
    <div className="scroll-mt-24 bg-[#EFEFEF] pt-8">
      <header className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <p className="text-[13px] text-gray-600">Case studies</p>
        <h1 className="mt-2 text-4xl font-medium tracking-tight text-gray-900">Projects</h1>
      </header>
      <CaseStudiesSection />
    </div>
  );
}
