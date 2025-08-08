import Card from "./component/card";

export default function App() {
  return (
    <div className="min-h-screen">
      <h1 className="flex items-center justify-center text-4xl font-bold my-5">Animedl</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4 max-w-6xl">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}