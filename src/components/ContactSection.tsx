import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 flex justify-center px-4 relative z-10">
      <div className="relative w-full max-w-[1000px]">
        {/* Yellow tilted tag */}
        <div className="absolute -top-6 left-8 bg-secondary px-5 py-2.5 font-extrabold border-[3px] border-foreground -rotate-6 z-20" style={{ boxShadow: "var(--brutal-shadow)" }}>
          START A PROJECT
        </div>

        {/* Main box */}
        <div className="bg-muted brutal-box-xl p-8 md:p-16 flex flex-col md:flex-row gap-12">
          {/* Left */}
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black leading-[0.95]">
              LET'S<br />TALK<br />CODE.
            </h2>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              I am currently available for freelance work and open to full-time opportunities.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4 font-semibold">
                <span className="w-9 h-9 bg-primary text-primary-foreground flex items-center justify-center text-sm">✉</span>
                adityapurviya67@gmail.com
              </div>
              <div className="flex items-center gap-4 font-semibold">
                <span className="w-9 h-9 bg-primary text-primary-foreground flex items-center justify-center text-sm">📍</span>
                Remote / Earth
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="md:w-1/2 bg-card border-[3px] border-foreground p-6">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="text-xs font-extrabold mt-3 mb-1">IDENTITY</label>
              <input className="p-3 border-[2px] border-input bg-muted font-sans" placeholder="Your name" required />

              <label className="text-xs font-extrabold mt-4 mb-1">COORDINATES</label>
              <input type="email" className="p-3 border-[2px] border-input bg-muted font-sans" placeholder="Email address" required />

              <label className="text-xs font-extrabold mt-4 mb-1">TRANSMISSION</label>
              <textarea className="p-3 border-[2px] border-input bg-muted font-sans h-28 resize-none" placeholder="Your message" required />

              <button
                type="submit"
                className="mt-5 py-3.5 bg-neon-blue text-primary-foreground font-extrabold border-[3px] border-foreground brutal-hover"
                style={{ boxShadow: "var(--brutal-shadow)" }}
              >
                {submitted ? "TRANSMISSION SENT 🚀" : "TRANSMIT DATA"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
