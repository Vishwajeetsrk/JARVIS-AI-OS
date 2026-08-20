import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import Navbar from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { CoursesPage } from "./pages/CoursesPage";
import { HomePage } from "./pages/HomePage";
import { InstructorsPage } from "./pages/InstructorsPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <PresetHashRouter
          routes={{
            "": <HomePage />,
            about: <AboutPage />,
            courses: <CoursesPage />,
            instructors: <InstructorsPage />,
            testimonials: <TestimonialsPage />,
            blog: <BlogPage />,
            contact: <ContactPage />,
          }}
        />
      </main>
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-white/50 sm:px-6">
        <p>© {new Date().getFullYear()} DesignPro — Product design education</p>
      </footer>
    </div>
  );
}
