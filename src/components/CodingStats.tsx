import { useMemo } from "react";

const MONTHS = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];
const DAYS = ["Mon", "", "Wed", "", "Fri", "", ""];

const generateHeatmapData = (weeks: number, rows: number, seed: number) => {
  const data: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const col: number[] = [];
    for (let d = 0; d < rows; d++) {
      const val = Math.sin(seed + w * 0.3 + d * 0.7) * 0.5 + 0.5;
      col.push(val > 0.7 ? 3 : val > 0.45 ? 2 : val > 0.25 ? 1 : 0);
    }
    data.push(col);
  }
  return data;
};

const Heatmap = ({ weeks = 52, rows = 7, color = "accent", seed = 42 }: { weeks?: number; rows?: number; color?: string; seed?: number }) => {
  const data = useMemo(() => generateHeatmapData(weeks, rows, seed), [weeks, rows, seed]);
  const colorMap: Record<string, string[]> = {
    accent: ["hsl(var(--dark-border))", "hsl(144 100% 20%)", "hsl(144 100% 35%)", "hsl(var(--accent))"],
    orange: ["hsl(var(--dark-border))", "hsl(30 100% 20%)", "hsl(30 100% 35%)", "hsl(var(--neon-orange))"],
  };
  const colors = colorMap[color] || colorMap.accent;
  const weeksPerMonth = Math.floor(weeks / MONTHS.length);

  return (
    <div className="bg-dark-bg border border-dark-border p-3 overflow-hidden">
      {/* Month labels */}
      <div className="flex ml-7 mb-1">
        {MONTHS.map((m, i) => (
          <span key={i} className="text-[9px] text-muted-foreground" style={{ width: `${weeksPerMonth * 11}px` }}>
            {m}
          </span>
        ))}
      </div>
      <div className="flex">
        {/* Day labels */}
        <div className="flex flex-col gap-[3px] mr-1 shrink-0">
          {DAYS.map((d, i) => (
            <span key={i} className="text-[9px] text-muted-foreground h-[8px] leading-[8px] w-6 text-right pr-1">
              {d}
            </span>
          ))}
        </div>
        {/* Grid */}
        <div className="flex gap-[3px]">
          {data.map((col, w) => (
            <div key={w} className="flex flex-col gap-[3px]">
              {col.map((level, d) => (
                <div
                  key={d}
                  className="w-[8px] h-[8px] rounded-[2px] transition-colors"
                  style={{ backgroundColor: colors[level] }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CodingStats = () => {
  return (
    <section className="bg-dark-bg py-24 md:py-32 px-6 md:px-20 text-primary-foreground">
      {/* Header */}
      <div className="flex justify-between items-center mb-14">
        <h2 className="section-title">
          CODING<span className="text-accent">_</span>STATS
        </h2>
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 bg-accent rounded-full pulse-glow" />
          LIVE
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* GitHub Panel */}
        <div className="bg-dark-card border border-dark-border p-8 transition-colors hover:border-accent">
          <div className="flex items-center gap-2 font-bold mb-6">
            <span className="text-accent">⚡</span> GITHUB
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-accent bg-dark-border flex items-center justify-center text-xs font-bold">AP</div>
              <div>
                <p className="font-bold">Adityapurviya4</p>
                <p className="text-xs text-muted-foreground">Midnight Coder</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-extrabold text-accent">370+</p>
              <p className="text-[10px] tracking-widest text-muted-foreground">COMMITS</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: "REPOSITORIES", value: "18" },
              { label: "FOLLOWERS", value: "2" },
              { label: "COMMITS", value: "370+" },
              { label: "JOINED", value: "2023" },
            ].map((s) => (
              <div key={s.label} className="bg-dark-bg border border-dark-border p-4">
                <span className="text-[11px] text-muted-foreground">{s.label}</span>
                <h4 className="text-xl font-bold mt-1">{s.value}</h4>
              </div>
            ))}
          </div>

          <Heatmap weeks={52} rows={7} color="accent" seed={42} />

          <div className="mt-5 flex justify-between items-center bg-dark-bg p-3 border border-dark-border font-mono text-sm">
            <span className="text-accent">$ gh --stats</span>
            <a href="https://github.com/Adityapurviya4" target="_blank" rel="noreferrer" className="border border-accent text-accent px-3 py-1.5 text-xs tracking-widest hover:bg-accent hover:text-primary transition-colors">
              VIEW_GH →
            </a>
          </div>
        </div>

        {/* LeetCode Panel */}
        <div className="bg-dark-card border border-dark-border p-8 transition-colors hover:border-neon-orange">
          <div className="flex items-center gap-2 font-bold mb-6">
            <span className="text-neon-orange">⚡</span> LEETCODE
            <span className="ml-auto bg-dark-bg text-neon-orange px-2 py-0.5 text-xs border border-dark-border">#TOP</span>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neon-orange text-primary flex items-center justify-center font-extrabold">LC</div>
              <div>
                <p className="font-bold">Aditya Purviya</p>
                <p className="text-xs text-muted-foreground">Problem Solver</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">#979833</p>
          </div>

          {/* Circle + difficulty */}
          <div className="flex gap-10 items-center mb-6">
            <div className="w-28 h-28 border-4 border-neon-orange rounded-full flex flex-col items-center justify-center shrink-0">
              <h4 className="text-2xl font-bold">50+</h4>
              <span className="text-[11px] text-muted-foreground">SOLVED</span>
            </div>
            <div className="flex-1 space-y-3">
              {[
                { label: "Easy", color: "bg-accent", width: "70%" },
                { label: "Medium", color: "bg-neon-orange", width: "40%" },
                { label: "Hard", color: "bg-destructive", width: "15%" },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-3">
                  <span className="text-xs w-14 text-muted-foreground">{d.label}</span>
                  <div className="flex-1 h-2 bg-dark-border">
                    <div className={`h-full ${d.color}`} style={{ width: d.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-2">Heatmap (Last 52 Weeks)</p>
            <Heatmap weeks={52} rows={7} color="orange" seed={17} />
          </div>

          <div className="mt-5 flex justify-between items-center bg-dark-bg p-3 border border-dark-border font-mono text-sm">
            <span className="text-neon-orange">$ lc --status</span>
            <a href="#" className="border border-neon-orange text-neon-orange px-3 py-1.5 text-xs tracking-widest hover:bg-neon-orange hover:text-primary transition-colors">
              VIEW_LC →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
