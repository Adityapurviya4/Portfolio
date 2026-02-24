import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const links = [
    { label: "/ABOUT", id: "about" },
    { label: "/SKILLS", id: "skills" },
    { label: "/LOGS", id: "experience" },
    { label: "/WORK", id: "work" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-5 relative z-10">
      <div className="brutal-box bg-popover px-5 py-2 font-bold text-sm tracking-wide">
        ADITYA.exe
      </div>

      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-8 font-bold text-sm">
        {links.map((l) => (
          <li key={l.id} className="cursor-pointer brutal-hover" onClick={() => scrollTo(l.id)}>
            {l.label}
          </li>
        ))}
        <li
          className="bg-secondary border-[2px] border-foreground px-5 py-2 cursor-pointer brutal-hover"
          style={{ boxShadow: "var(--brutal-shadow)" }}
          onClick={() => scrollTo("contact")}
        >
          HIRE ME
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden brutal-box bg-popover p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-popover border-[3px] border-foreground mx-4 mt-2 z-50" style={{ boxShadow: "var(--brutal-shadow-lg)" }}>
          <ul className="flex flex-col font-bold text-sm">
            {links.map((l) => (
              <li
                key={l.id}
                className="px-6 py-4 border-b border-foreground/20 cursor-pointer hover:bg-secondary transition-colors"
                onClick={() => scrollTo(l.id)}
              >
                {l.label}
              </li>
            ))}
            <li
              className="px-6 py-4 bg-secondary cursor-pointer font-bold"
              onClick={() => scrollTo("contact")}
            >
              HIRE ME
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
