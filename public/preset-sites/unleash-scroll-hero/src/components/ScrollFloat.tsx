import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollFloatProps = {
  children: string;
};

export function ScrollFloat({ children }: ScrollFloatProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const chars = root.querySelectorAll(".char");
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "+=1000",
      scrub: 1.5,
      animation: gsap.fromTo(
        chars,
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          transformOrigin: "50% 0%",
        },
        {
          opacity: 0,
          yPercent: 250,
          scaleY: 1.2,
          scaleX: 0.9,
          ease: "power2.inOut",
          duration: 1,
          stagger: 0.05,
        },
      ),
    });

    return () => {
      st.kill();
    };
  }, [children]);

  const lines = children.split("\n");

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-10 flex flex-col justify-end p-4 md:p-8 pointer-events-none"
    >
      <h1
        className="scroll-float-text font-dirtyline text-white"
        data-editable
        style={{
          fontSize: "clamp(4rem, 15vw, 317px)",
          lineHeight: 0.85,
          letterSpacing: "0%",
        }}
      >
        {lines.map((line, li) => (
          <span key={li} style={{ display: "block" }}>
            {line.split(" ").map((word, wi, words) => (
              <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                {word.split("").map((ch, ci) => (
                  <span key={ci} className="char">
                    {ch}
                  </span>
                ))}
                {wi < words.length - 1 ? <span className="char">&nbsp;</span> : null}
              </span>
            ))}
          </span>
        ))}
      </h1>
    </div>
  );
}
