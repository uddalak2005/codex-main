import { mockData } from "../data/mockData";

export default function Blogs() {
  const { hero, categories, posts } = mockData.blogs;

  return (
    <div className="bg-white min-h-screen">
      <main className="px-6 md:px-20 py-12 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-block border-2 border-slate-900 brutalist-shadow px-4 py-1 mb-4" style={{ backgroundColor: '#00B4D8' }}>
            <span className="text-xs font-black uppercase text-slate-900">{hero.version}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-slate-900 font-display">
            {hero.titlePart1}<br /><span className="text-primary italic">{hero.titlePart2}</span>
          </h1>
          <p className="text-xl max-w-2xl font-medium border-l-4 border-primary pl-6 py-2 text-slate-800">
            {hero.description}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-6 py-2 border-2 border-slate-900 font-bold uppercase text-sm tracking-widest transition-colors ${i === 0 ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 hover:bg-[#00B4D8]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-white border-2 border-slate-900 flex flex-col transition-all duration-300 overflow-hidden brutalist-shadow-hover hover:-translate-y-1 hover:-translate-x-1 group cursor-pointer" style={{"--tw-hover-shadow-color": "#00B4D8"} as any}>
              <div className="aspect-video w-full bg-slate-200 border-b-2 border-slate-900 overflow-hidden relative shrink-0">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={post.image}
                  alt={post.title}
                />
                <div className={`absolute top-4 left-4 text-white text-[10px] font-bold px-2 py-1 uppercase border-2 ${
                  ['Security', 'Wasm', 'React'].includes(post.category) ? 'bg-primary border-slate-900' : 
                  post.category === 'Frontend' ? 'bg-[#00B4D8] text-slate-900 border-slate-900' : 'bg-slate-900 border-white'
                }`}>
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-sm" style={{ color: '#00B4D8' }}>schedule</span>
                  <span className="text-[10px] font-bold uppercase text-slate-500">{post.readTime} • {post.date}</span>
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight mb-4 group-hover:text-primary transition-colors font-display line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-8 flex-1 line-clamp-3 font-medium">
                  {post.desc}
                </p>
                <div className="flex items-center justify-between border-t-2 border-slate-900 pt-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-200">
                      <img className="w-full h-full object-cover" src={post.author.avatar} alt={post.author.name} />
                    </div>
                    <span className="text-xs font-bold uppercase text-slate-900">{post.author.name}</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-900">arrow_outward</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center items-center gap-4">
          <button className="size-12 border-2 border-slate-900 bg-white flex items-center justify-center brutalist-shadow hover:bg-[#00B4D8] transition-all text-slate-900 cursor-pointer">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="px-4 py-2 border-2 border-slate-900 bg-primary text-white font-bold cursor-pointer">01</span>
            <span className="px-4 py-2 border-2 border-transparent font-bold cursor-pointer hover:border-slate-300">02</span>
            <span className="px-4 py-2 border-2 border-transparent font-bold cursor-pointer hover:border-slate-300">03</span>
            <span className="px-4 py-2 border-2 border-transparent font-bold">...</span>
            <span className="px-4 py-2 border-2 border-transparent font-bold cursor-pointer hover:border-slate-300">12</span>
          </div>
          <button className="size-12 border-2 border-slate-900 bg-white flex items-center justify-center brutalist-shadow hover:bg-[#00B4D8] transition-all text-slate-900 cursor-pointer">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>
    </div>
  );
}
