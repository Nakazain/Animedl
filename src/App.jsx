import Card from "./component/card";
import Search from "./component/search";
import  Container from "./component/container";

export default function App() {
  return (
    <div className="min-h-screen">
      <h1 className="flex items-center justify-center text-4xl font-bold my-5">Animedl</h1>
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center mb-5">
            <Search />
          </div>
          <Container title="Anime Terbaru">
            <Card />
            <Card />
            <Card />
            <Card />
          </Container>
          <Container title="Anime Tamat">
            <Card />
            <Card />
            <Card />
            <Card />
          </Container>
        </div>
      </div>
    </div>
  );
}