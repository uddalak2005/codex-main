import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white py-20 px-6 border-t-4 border-slate-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-primary p-1">
              <span className="material-symbols-outlined text-white text-3xl">terminal</span>
            </div>
            <span className="text-3xl font-black tracking-tighter">CODEX ITER</span>
          </div>
          <p className="text-slate-400 max-w-md font-medium text-lg leading-relaxed">
            A student-led engineering organization dedicated to technological excellence, open-source innovation, and building the future of the web.
          </p>
        </div>
        <div>
          <h5 className="font-black text-xl mb-6 uppercase tracking-widest text-primary">Navigate</h5>
          <ul className="space-y-4 font-bold">
            <li><Link className="hover:text-primary transition-colors" to="/">THE JOURNEY</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/blogs">THE ARCHIVE</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/events">CURRENT OPS</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/team">THE SQUAD</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-black text-xl mb-6 uppercase tracking-widest text-primary">Connect</h5>
          <div className="flex gap-4">
            <a className="bg-white text-slate-900 p-2 border-2 border-primary hover:bg-primary hover:text-white transition-all flex" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a className="bg-white text-slate-900 p-2 border-2 border-primary hover:bg-primary hover:text-white transition-all flex" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a className="bg-white text-slate-900 p-2 border-2 border-primary hover:bg-primary hover:text-white transition-all flex" href="#">
              <span className="material-symbols-outlined">code</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 font-mono text-sm">
        <p>© 2024 CODEX ITER. ALL SYSTEMS OPERATIONAL.</p>
        <p>DESIGNED FOR THE BOLD.</p>
      </div>
    </footer>
  );
}
