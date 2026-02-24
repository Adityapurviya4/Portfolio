const Footer = () => {
  return (
    <footer className="bg-dark-bg text-primary-foreground border-t-4 border-accent relative z-10">
      <div className="px-6 md:px-20 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black mb-3">
              ADITYA<span className="text-accent">.</span>
            </h2>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Designing for the future with the raw aesthetics of the past. No cookies, no trackers, just code.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-accent text-xs tracking-widest font-bold mb-5">SITEMAP</h4>
            <ul className="space-y-2.5">
              {["Home", "Works", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        {/* Socials */}
          <div>
            <h4 className="text-accent text-xs tracking-widest font-bold mb-5">SOCIALS</h4>
            <div className="flex gap-4">
              {[
                {label: "GH", href: "https://github.com/Adityapurviya4" },
                { label: "LI", href: "#" },
                { label: "TW", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-dark-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all hover:-translate-y-1 text-xs font-bold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-border text-center py-5 text-xs text-muted-foreground font-mono">
        © 2026 ADITYA PURVIYA.exe  //  SYSTEM_END
      </div>
    </footer>
  );
};

export default Footer;
