const Hero = () => {
  return (
    <section className="text-center mt-16 md:mt-24 relative z-10 px-4">
      {/* Background watermark */}
      <div className="absolute right-[5%] top-[-10%] text-[120px] md:text-[180px] font-black text-foreground/5 tracking-widest z-0 select-none hidden lg:block">
        CODE
      </div>

      {/* Decorative elements */}
      <div className="hidden lg:block w-12 h-12 bg-neon-blue absolute left-28 top-24 border-[2px] border-foreground" style={{ boxShadow: "var(--brutal-shadow-lg)" }} />
      <div className="hidden lg:block w-14 h-14 bg-neon-pink rounded-full absolute right-36 top-48 border-[2px] border-foreground" style={{ boxShadow: "var(--brutal-shadow-lg)" }} />

      {/* Status box */}
      <div className="inline-flex items-center gap-3 px-5 py-2 brutal-box bg-popover text-sm font-semibold">
        <span className="w-2.5 h-2.5 bg-accent rounded-full pulse-glow" />
        SYSTEM STATUS: ONLINE
      </div>

      {/* Title */}
      <h1 className="text-6xl md:text-[90px] font-black mt-10 leading-[0.95]" style={{ textShadow: "6px 6px 0px rgba(0,0,0,0.15)" }}>
        FULL STACK{" "}
        <span className="font-light tracking-wider">DEVELOPER</span>
      </h1>

      {/* Highlight box */}
      <div className="mt-10 inline-block px-8 py-5 bg-secondary border-[3px] border-foreground font-medium" style={{ boxShadow: "var(--brutal-shadow-lg)" }}>
        <p>I build digital products that refuse to be boring.</p>
        <p className="mt-1 text-muted-foreground">React • Python • Java • Node</p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button
          className="px-8 py-3.5 bg-primary text-primary-foreground border-[2px] border-foreground font-bold brutal-hover"
          onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
        >
          VIEW DATABASE
        </button>
        <button className="px-8 py-3.5 bg-popover border-[2px] border-foreground font-bold brutal-hover">
          DOWNLOAD CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
