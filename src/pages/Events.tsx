import { mockData } from "../data/mockData";

export default function Events() {
  const { hero, filters, items } = mockData.events;

  return (
    <div className="bg-background-light text-primary min-h-screen">
      <main className="flex-1 px-6 py-12 md:px-20 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-block px-4 py-1 text-white text-xs font-black uppercase tracking-[0.3em] mb-4" style={{ backgroundColor: '#00B4D8' }}>
            {hero.label}
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-6 font-display">
            {hero.titlePart1}<br /><span className="text-white bg-primary px-2">{hero.titlePart2}</span>
          </h2>
          <p className="max-w-xl text-lg font-bold leading-tight border-l-4 border-primary pl-4 uppercase">
            {hero.description}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`px-8 py-2 font-black uppercase text-sm border-2 border-primary transition-colors duration-200 cursor-pointer ${
                index === 0 ? 'bg-primary text-white' : 'bg-transparent text-primary hover:bg-primary/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8">
          <div className="hidden md:flex flex-col items-center py-4">
            <div className="w-1 grow" style={{
              background: 'repeating-linear-gradient(to bottom, #03045E, #03045E 10px, transparent 10px, transparent 20px)'
            }}></div>
          </div>
          <div className="flex flex-col gap-16">
            {items.map((item, i) => (
              <div key={item.id} className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-primary bg-white brutalist-shadow transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#03045E]" style={{"--tw-hover-shadow-color": "#03045E"} as any}>
                <div className="h-64 lg:h-full overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-primary relative shrink-0">
                  <div className={`absolute inset-0 mix-blend-multiply z-10 ${i % 2 === 0 ? 'bg-primary/20' : 'bg-[#00B4D8]/20'}`}></div>
                  <img
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="absolute top-4 left-4 z-20 bg-primary text-white px-3 py-1 font-bold text-xs">ID: {item.id}</div>
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col">
                        <span className="font-black text-sm uppercase" style={{ color: '#00B4D8' }}>{item.date}</span>
                        <span className="text-primary/60 font-bold text-xs uppercase tracking-widest">{item.time}</span>
                      </div>
                      <span className="material-symbols-outlined" style={{ color: '#00B4D8' }}>{item.icon}</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-4 transition-colors font-display" style={{ '--tw-group-hover-color': '#00B4D8' } as any}>{item.title}</h3>
                    <p className="text-primary font-medium leading-snug mb-8">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <button className="flex-1 bg-primary text-white py-4 px-6 font-black uppercase tracking-widest hover:bg-slate-800 transition-colors cursor-pointer">
                      Register Now
                    </button>
                    <button className="p-4 border-4 border-primary hover:bg-primary hover:text-white transition-all cursor-pointer flex items-center justify-center">
                      <span className="material-symbols-outlined block">share</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col items-center justify-center border-4 border-dashed border-primary/40 py-12 bg-white/50">
              <span className="material-symbols-outlined text-primary/40 text-4xl mb-2">more_horiz</span>
              <p className="font-black uppercase tracking-[0.2em] text-primary/40">End of Current Iteration Cycle</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
