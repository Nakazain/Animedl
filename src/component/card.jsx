const Card = () => {
  return (
      <a className="group relative max-w-sm">
        <div className="absolute -z-1 -inset-1 rounded-xl bg-gradient-to-r from-teal-500 via-gold to-green-500 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-2xl" />
        <div className="relative x-3 py-2 rounded-xl border border-slate-800 bg-slate-950 p-2">
          <div className="rounded-lg bg-slate-800/50">
            <div className='px-2 py-1'>
              <p className="text-xl font-semibold">Judul</p>
              <p className="text-sm">Episode | Tanggal</p>
            </div>
          </div>  
          <img className="rounded-md mt-2" src="/img.jpg" />
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </a>
  );
}

export default Card;
