export default function Container({ children, title }) {
  return (
    <div className=" p-5 -z-20 bg-slate-950 rounded-2xl my-10">
      <p className="mb-4 bg-slate-900 border-b-2 text-2xl font-bold px-2 p-2 rounded-sm">{title}</p>
      <div className="grid grid-cols-4 gap-4 max-w-6xl">
        {children}
      </div>
    </div>
  );
}
