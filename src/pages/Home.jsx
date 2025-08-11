import { useEffect, useState } from "react";
import Card from "../component/Card";
import Search from "../component/Search";
import Container from "../component/Container";

export default function Home() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/");
        const data = await res.json();
        setAnimeList(data);
      } catch (err) {
        console.error("Gagal ambil data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <h1 className="flex items-center justify-center text-4xl font-bold my-5">Animedl</h1>
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center mb-5">
            <Search />
          </div>
          <Container title="Anime Terbaru">
            {loading ? (
              <p className="text-center w-full text-gray-500">Loading...</p>
            ) : (
              <div className="grid grid-cols-4 gap-4 max-w-6xl">
                {animeList.slice(0, 15).map((anime, idx) => (
                  <Card
                    key={idx}
                    title={anime.title}
                    eps={anime.eps}
                    date={anime.date}
                    img={anime.img}
                  />
                ))}
              </div>
            )}
          </Container>
          <Container title="Anime Tamat">
            {loading ? (
              <p className="text-center w-full text-gray-500">Loading...</p>
            ) : (
              <div className="grid grid-cols-4 gap-4 max-w-6xl">
                {animeList.slice(-10).map((anime, idx) => (
                  <Card
                    key={idx}
                    title={anime.title}
                    eps={anime.eps}
                    date={anime.date}
                    img={anime.img}
                  />
                ))}
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
}