const Ticker = () => {
  const text = "OPEN FOR WORK /// FULL STACK DEVELOPMENT /// HTML /// CSS /// JAVASCRIPT /// REACT /// NEXT.JS /// NODE.JS /// PYTHON /// JAVA /// DJANGO /// MYSQL /// POSTGRESQL /// MONGODB /// GIT /// GITHUB /// DOCKER /// REST API /// GRAPHQL /// DATA ANALYSIS /// PANDAS /// NUMPY /// MATPLOTLIB /// POWER BI /// TABLEAU /// MACHINE LEARNING /// FAST /// SCALABLE /// SECURE /// ACCESSIBLE /// ";

  return (
    <div className="w-full overflow-hidden bg-neon-blue border-y-[3px] border-foreground relative z-10">
      <div className="ticker-animate flex w-max">
        <span className="text-primary-foreground font-bold text-sm py-3 tracking-wider whitespace-nowrap mr-12">
          {text}
        </span>
        <span className="text-primary-foreground font-bold text-sm py-3 tracking-wider whitespace-nowrap mr-12">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Ticker;
