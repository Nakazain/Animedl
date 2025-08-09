export default function Search() {
  return (
    <div className="group relative w-fit">
      <div className="absolute -z-10 -inset-1 rounded-xl bg-gradient-to-r from-teal-500 via-gold to-green-500 opacity-10 blur-sm transition-all duration-500 group-hover:opacity-30 group-hover:blur-2xl" />
      <form className="flex bg-slate-900 border border-slate-700 text-white rounded-md shadow text-sm">
        <div aria-disabled="true" className="w-10 grid place-content-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <input type="text" spellCheck="false" name="search" className="bg-transparent py-1.5 outline-none placeholder:text-zinc-400 w-48 transition-all" placeholder="Search..." />
        <button className="w-10 grid place-content-center" aria-label="Clear input button" type="reset">
          <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </form>
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}
