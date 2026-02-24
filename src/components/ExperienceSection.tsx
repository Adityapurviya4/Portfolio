import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    date: "Nov 2023 - Present",
    title: "FREELANCE FULL-STACK DEVELOPER",
    company: "@ Self Employed",
    points: [
      "Building responsive web applications using HTML, CSS, JavaScript",
      "Developing modern apps with React, Node.js & Django",
      "Creating custom digital solutions for global clients",
    ],
  },
  {
    date: "Aug 2025 - Nov 2025",
    title: "DATA ENTRY CONTRACT",
    company: "@ Injala India",
    points: [
      "Processed large-scale data with 99%+ accuracy",
      "Maintained strict quality assurance standards",
      "Delivered daily & weekly reporting targets",
    ],
  },
  {
    date: "Dec 2024 - Aug 2025",
    title: "PROJECT MANAGER",
    company: "@ Self Employed",
    points: [
      "Managed client projects from start to deployment",
      "Coordinated development teams & milestones",
      "Handled communication and technical planning",
    ],
  },
  {
    date: "Nov 2023 - May 2025",
    title: "ONLINE BUSINESS MANAGER",
    company: "@ Genuine Bags",
    points: [
      "Managed end-to-end ecommerce operations",
      "Executed digital marketing strategies",
      "Handled inventory & supply chain management",
    ],
  },
  {
    date: "Jun 2023 - Nov 2023",
    title: "DATA ENTRY MANAGER",
    company: "@ Spectrum Tours & Travels",
    points: [
      "Managed booking database systems",
      "Created business analytics reports",
      "Implemented data backup & recovery processes",
    ],
  },
];

const ExperienceSection = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-idx"));
          if (entry.isIntersecting) {
            setVisible((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="my-24 md:my-36 px-6 md:px-20 relative z-10">
      <h2 className="section-title mb-16">
        EXPERIENCE<span className="text-destructive">_</span>LOG
      </h2>
      <div className="relative border-l-4 border-foreground pl-8 md:pl-10">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            ref={(el) => (refs.current[idx] = el)}
            data-idx={idx}
            className="bg-popover brutal-box-lg p-6 md:p-8 mb-14 relative transition-all duration-500"
            style={{
              opacity: visible.has(idx) ? 1 : 0,
              transform: visible.has(idx) ? "translateY(0)" : "translateY(40px)",
            }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[52px] md:-left-[58px] top-7 w-4 h-4 bg-secondary border-[3px] border-foreground" />

            {/* Date badge */}
            <span className="absolute right-4 -top-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 border-[2px] border-foreground">
              {exp.date}
            </span>

            <h3 className="text-lg md:text-xl font-extrabold mt-2">{exp.title}</h3>
            <h4 className="text-muted-foreground mb-3">{exp.company}</h4>
            <ul className="pl-5 list-disc space-y-1.5 text-sm">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
