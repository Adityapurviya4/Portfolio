import { useEffect, useRef, useState } from "react";
import stockeasyImg from "@/assets/project-stockeasy.jpg";
import resumeiqImg from "@/assets/project-resumeiq.jpg";
import aivaImg from "@/assets/project-aiva.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";

const projects = [
  {
    title: "STOCKEASY",
    desc: "Online stock platform with chart analytics, AI chatbot & admin dashboard.",
    tags: ["Django", "Python", "MySQL", "WebSockets"],
    image: stockeasyImg,
  },
  {
    title: "RESUMEIQ",
    desc: "AI Resume analyzer + builder with job search integration.",
    tags: ["Streamlit", "MySQL", "Gemini API"],
    image: resumeiqImg,
  },
  {
    title: "A.I.V.A CHATBOT",
    desc: "AI chatbot that answers questions, analyzes documents & manages tasks.",
    tags: ["Django", "Python", "AI"],
    image: aivaImg,
  },
  {
    title: "PORTFOLIO V1",
    desc: "Interactive 3D portfolio built with React & Three.js.",
    tags: ["React", "Three.js", "Node"],
    image: portfolioImg,
  },
];

const ProjectsSection = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-idx"));
          if (entry.isIntersecting) setVisible((p) => new Set(p).add(idx));
        });
      },
      { threshold: 0.2 }
    );
    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="bg-secondary py-24 md:py-36 px-6 md:px-20 relative z-10">
      <h2 className="section-title mb-16" style={{ textShadow: "7px 7px 5px rgba(0,0,0,0.3)" }}>
        SELECTED<span className="text-foreground" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}>_</span>WORKS
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            ref={(el) => (refs.current[idx] = el)}
            data-idx={idx}
            className="bg-popover brutal-box-xl relative transition-all duration-500 overflow-hidden brutal-hover group"
            style={{
              opacity: visible.has(idx) ? 1 : 0,
              transform: visible.has(idx) ? "translateY(0)" : "translateY(50px)",
            }}
          >
            <div className="w-full h-52 md:h-64 border-b-4 border-foreground overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-extrabold">{proj.title}</h3>
                <a href="#" className="w-10 h-10 bg-accent border-[2px] border-foreground flex items-center justify-center font-black hover:bg-primary hover:text-accent transition-colors">↗</a>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span key={tag} className="bg-primary text-primary-foreground text-[11px] px-2.5 py-1.5 font-semibold">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a
          href="https://github.com/Adityapurviya4"
          target="_blank"
          rel="noreferrer"
          className="relative inline-block px-10 py-5 border-[3px] border-foreground font-extrabold overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-primary-foreground transition-colors">VIEW ALL REPOS ON GITHUB</span>
          <span className="absolute left-0 top-0 w-0 h-full bg-primary transition-all duration-400 group-hover:w-full z-0" />
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
