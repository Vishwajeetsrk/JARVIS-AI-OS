import { AboutSection } from "../components/AboutSection";

export function StudioPage() {
  return (
    <div className="scroll-mt-24 bg-[#EFEFEF]">
      <header className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <p className="text-[13px] text-gray-600">The studio</p>
        <h1 className="mt-2 text-4xl font-medium tracking-tight text-gray-900">Studio</h1>
      </header>
      <AboutSection />
    </div>
  );
}
