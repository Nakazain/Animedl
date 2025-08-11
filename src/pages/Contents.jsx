import Container from "../component/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { load } from "cheerio";

export default function Contents() {

  const { slug } = useParams();
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/${slug}`)
      .then(res => res.json())
      .then(data => setAnimeData(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <div className="max-w-4xl">
          {loading ? (
            <Container title="Loading..."></Container>
          ) : (
            <Container title={animeData.title}>
              <div className="flex justify-center gap-4">
                <img className="rounded-md h-64" src={animeData.img} alt="Anime Thumbnail" />
                <div>
                  <p><span><b>Judul</b>: {animeData.title}</span></p>
                  <p><span><b>Japanese</b>: {animeData.jp_title}</span></p>
                  <p><span><b>Skor</b>: {animeData.ratting}</span></p>
                  <p><span><b>Produser</b>: {animeData.produser}</span></p>
                  <p><span><b>Tipe</b>: {animeData.type}</span></p>
                  <p><span><b>Status</b>: {animeData.status}</span></p>
                  <p><span><b>Total Episode</b>: {animeData.episode_count}</span></p>
                  <p><span><b>Durasi</b>: {animeData.duration}</span></p>
                  <p><span><b>Tanggal Rilis</b>: {animeData.release_date}</span></p>
                  <p><span><b>Studio</b>: {animeData.studio}</span></p>
                  <p><span><b>Genre</b>: {animeData.genres}</span></p>
                </div>
                <div>
                </div>
              </div>
              <Container title={"Sinopsis"} noMargin>
                <div>
                  <p>{animeData.synopsis}</p>
                </div>
              </Container>
              <Container title={"Episode"} noMargin>
                <ul>
                  <li>Episode 1</li>
                  <li>Episode 2</li>
                  <li>Episode 3</li>
                  <li>Episode 4</li>
                </ul>
              </Container>
            </Container>
          )}
        </div>
      </div>
    </div>
  );
}