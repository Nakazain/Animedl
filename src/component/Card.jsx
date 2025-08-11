import { Link } from "react-router-dom";

export default function Card({ title, eps, date, img, page }) {
  return (
      <Link to={page} className="group relative max-w-sm cursor-pointer">
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-teal-500 via-gold to-green-500 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-2xl" />
        <div className="relative z-10 x-3 py-2 rounded-xl border border-slate-800 bg-slate-950 p-2">
          <div className="rounded-lg bg-slate-800/50">
            <div className='px-2 py-1'>
              <p className="text-xl font-semibold line-clamp-1">{title}</p>
              <p className="text-sm">{eps} | {date}</p>
            </div>
          </div>  
          <img className="rounded-md mt-2 w-full" src={img} />
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </Link>
  );
}
