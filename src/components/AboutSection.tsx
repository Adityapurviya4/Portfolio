import { useState } from "react";

const AboutSection = () => {
  const [available, setAvailable] = useState(true);

  return (
    <section id="about" className="mx-auto my-24 md:my-32 px-6 md:px-16 relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 brutal-box-xl bg-card p-10 md:p-16">
        {/* Avatar */}
        <div className="relative w-60 shrink-0 brutal-box-lg bg-popover p-2.5">
          <div className="w-full aspect-square bg-muted flex items-center justify-center text-4xl font-black text-muted-foreground">
            👨‍💻
          </div>
          <span className="absolute -top-4 left-2.5 bg-destructive text-destructive-foreground text-xs px-2 py-1 border-[2px] border-foreground font-bold">
            AVATAR.png
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="section-title mb-5">WHO AM I?</h2>
          <p className="text-base max-w-xl leading-relaxed">
            I am <span className="bg-secondary px-1.5 font-semibold">Aditya</span>. A creative developer who believes the web has become too sanitized. I bring personality back to code.
          </p>

          <div className="bg-card border-l-[3px] border-neon-purple px-6 py-4 mt-6 w-fit">
            <p className="text-sm text-muted-foreground before:content-['>'] before:mr-2 before:font-bold before:text-muted-foreground/60">
              Specialized in Designing and Web Development.
            </p>
            <p className="text-sm text-muted-foreground mt-2 before:content-['>'] before:mr-2 before:font-bold before:text-muted-foreground/60">
              Obsessed with Perfection and AI.
            </p>
            <p className="text-sm text-muted-foreground mt-2 before:content-['>'] before:mr-2 before:font-bold before:text-muted-foreground/60">
              3+ years of shipping code that works.
            </p>
          </div>

          <div className="mt-6 flex gap-4 flex-wrap">
            <span className="bg-primary text-primary-foreground border-[2px] border-foreground px-5 py-2.5 font-bold brutal-hover cursor-default">
              📍 LOCATION: WORLDWIDE
            </span>
            <span
              className={`border-[2px] border-foreground px-5 py-2.5 font-bold brutal-hover cursor-pointer ${available ? "bg-accent" : "bg-destructive text-destructive-foreground"}`}
              onClick={() => setAvailable(!available)}
            >
              {available ? "🟢 STATUS: AVAILABLE" : "🔴 STATUS: BUSY"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
