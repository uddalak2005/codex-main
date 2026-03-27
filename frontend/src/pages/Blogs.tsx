import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { mockData } from "../data/mockData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/animations/ScrollReveal";
import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import { urlFor } from "../sanity/image";

export default function Blogs() {
  const { hero, categories, posts } = mockData.blogs;

  const [dynamicPosts, setDynamicPosts] = useState<any[]>(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await client.fetch(`*[_type == "post"] | order(date desc) {
          _id,
          title,
          "slug": slug.current,
          category,
          readTime,
          date,
          desc,
          image,
          author->{
            name,
            "avatar": image
          }
        }`);

        if (result && result.length > 0) {
          const formattedPosts = result.map((post: any) => ({
            ...post,
            image: post.image ? urlFor(post.image).url() : "https://via.placeholder.com/400x300?text=No+Image",
            author: {
              name: post.author?.name || "Unknown",
              avatar: post.author?.avatar ? urlFor(post.author.avatar).url() : "https://via.placeholder.com/150x150?text=No+Avatar"
            }
          }));
          setDynamicPosts(formattedPosts);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <main className="px-6 md:px-20 py-12 max-w-7xl mx-auto w-full">

        {/* Header Section */}
        <ScrollReveal className="mb-16">
          <div className="inline-block border-2 border-slate-900 brutalist-shadow px-4 py-1 mb-4" style={{ backgroundColor: '#00B4D8' }}>
            <span className="text-xs font-black uppercase text-slate-900">{hero.version}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-slate-900 font-display">
            {hero.titlePart1}<br /><span className="text-primary italic">{hero.titlePart2}</span>
          </h1>
          <p className="text-xl max-w-2xl font-medium border-l-4 border-primary pl-6 py-2 text-slate-800">
            {hero.description}
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        {/* <ScrollReveal delay={0.1} className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              className={`px-6 py-2 border-2 border-slate-900 font-bold uppercase text-sm tracking-widest transition-colors ${i === 0 ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 hover:bg-[#00B4D8]'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </ScrollReveal> */}

        {/* Blog Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dynamicPosts.map((post) => (
            <StaggerItem key={post.id || post._id}>
              <Link to={`/blogs/${post.slug}`} className="group h-full flex flex-col bg-white border-4 border-slate-900 brutalist-shadow-hover transition-all duration-300">
                <div className="aspect-video bg-slate-200 overflow-hidden border-b-4 border-slate-900 relative">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-sm" style={{ color: '#00B4D8' }}>schedule</span>
                    <span className="text-[10px] font-bold uppercase text-slate-500">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase leading-tight mb-4 group-hover:text-primary transition-colors font-display line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 font-medium mb-8 flex-1 line-clamp-3">
                    {post.desc}
                  </p>
                  <div className="flex items-center gap-3 pt-6 border-t-2 border-slate-900/10 mt-auto">
                    <img
                      className="w-8 h-8 rounded-full border-2 border-slate-900"
                      src={post.author?.avatar}
                      alt={post.author?.name}
                    />
                    <span className="text-sm font-black uppercase">{post.author?.name}</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Pagination */}
        <ScrollReveal delay={0.2} className="mt-20 flex justify-center items-center gap-4">
          {['chevron_left', null, 'chevron_right'].map((icon, i) =>
            icon ? (
              <motion.button
                key={i}
                whileHover={{ scale: 1.08, backgroundColor: "#00B4D8" }}
                whileTap={{ scale: 0.93 }}
                className="size-12 border-2 border-slate-900 bg-white flex items-center justify-center text-slate-900 cursor-pointer"
              >
                <span className="material-symbols-outlined">{icon}</span>
              </motion.button>
            ) : (
              <div key={i} className="flex items-center gap-2">
                {["01", "02", "03", "...", "12"].map((p) => (
                  <span key={p} className={`px-4 py-2 border-2 font-bold cursor-pointer transition-colors ${p === "01" ? 'border-slate-900 bg-primary text-white' : 'border-transparent hover:border-slate-300'}`}>{p}</span>
                ))}
              </div>
            )
          )}
        </ScrollReveal>
      </main>
    </div>
  );
}
