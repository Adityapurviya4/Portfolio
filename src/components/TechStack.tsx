import { useState } from "react";

const techItems = [
  { type: "_LIBRARY", name: "REACT" },
  { type: "_FRAMEWORK", name: "NEXT.JS" },
  { type: "_LANGUAGE", name: "PYTHON" },
  { type: "_RUNTIME", name: "NODE.JS" },
  { type: "_CSS", name: "TAILWIND" },
  { type: "_DATABASE", name: "MYSQL" },
  { type: "_MARKUP", name: "HTML5" },
  { type: "_VERSION", name: "GIT" },
  { type: "_API", name: "GRAPHQL" },
  { type: "_PLATFORM", name: "GITHUB" },
  { type: "_LANGUAGE", name: "JAVA" },
  { type: "_FRAMEWORK", name: "DJANGO" },
  { type: "_LANGUAGE", name: "PHP" },
  { type: "_FRAMEWORK", name: "LARAVEL" },
  { type: "_3D_ENGINE", name: "THREE.JS" },
  { type: "_LANGUAGE", name: "C++" },
];

const hoverColors = [
  "hsl(var(--neon-purple))",
  "hsl(174, 100%, 40%)",
  "hsl(var(--neon-pink))",
  "hsl(160, 100%, 36%)",
  "hsl(14, 80%, 60%)",
  "hsl(var(--neon-blue))",
  "hsl(45, 90%, 55%)",
];

const TechStack = () => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [hoverColor, setHoverColor] = useState("");

  const handleEnter = (idx: number) => {
    setHoverIdx(idx);
    setHoverColor(hoverColors[Math.floor(Math.random() * hoverColors.length)]);
  };

  return (
    <section id="skills" className="my-24 md:my-32 px-6 md:px-20 relative z-10">
      <h2 className="section-title mb-12">
        TECH<span className="text-accent">_</span>STACK
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {techItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-primary text-primary-foreground border-[2px] border-foreground p-4 text-center font-bold cursor-pointer transition-all duration-300 flex flex-col justify-center gap-2"
            style={{
              background: hoverIdx === idx ? hoverColor : undefined,
              transform: hoverIdx === idx ? "translateY(-6px)" : undefined,
              boxShadow: hoverIdx === idx ? "var(--brutal-shadow-lg)" : "var(--brutal-shadow)",
            }}
            onMouseEnter={() => handleEnter(idx)}
            onMouseLeave={() => setHoverIdx(null)}
          >
            <span className="text-[9px] tracking-[3px] font-normal opacity-40">
              &lt;{item.type}
            </span>
            <h3 className="text-sm md:text-base">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
