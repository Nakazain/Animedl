import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    const url = `https://otakudesu.best/anime/${slug}`;
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115 Safari/537.36",
        "Accept":
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "Upgrade-Insecure-Requests": "1",
        "Referer": "https://google.com/",
      },
    });
    const $ = cheerio.load(data);

    const img = $('.attachment-post-thumbnail').attr('src');
    const title = $('.infozin .infozingle p:first span').text().replace('Judul: ', '');
    const jp_title = $('.infozin .infozingle p:nth-child(2) span').text().replace('Japanese: ', '');
    const rating = $('.infozin .infozingle p:nth-child(3) span').text().replace('Skor: ', '');
    const produser = $('.infozin .infozingle p:nth-child(4) span').text().replace('Produser: ', '');
    const type = $('.infozin .infozingle p:nth-child(5) span').text().replace('Tipe: ', '');
    const status = $('.infozin .infozingle p:nth-child(6) span').text().replace('Status: ', '');
    const episode_count = $('.infozin .infozingle p:nth-child(7) span').text().replace('Total Episode: ', '');
    const duration = $('.infozin .infozingle p:nth-child(8) span').text().replace('Durasi: ', '');
    const release_date = $('.infozin .infozingle p:nth-child(9) span').text().replace('Tanggal Rilis: ', '');
    const studio = $('.infozin .infozingle p:nth-child(10) span').text().replace('Studio: ', '');
    const genres = $('.infozin .infozingle p:last span').text().replace('Genre: ', '');
    const synopsis = $('.sinopc').text().trim();

    const episodes = [];
    $('.episodelist ul li').each((i, el) => {
      const epsTitle = $(el).find('a').text().trim();
      const epsLink = $(el).find('a').attr('href');
      episodes.push({ epsTitle, epsLink });
    });

    res.status(200).json({ img, title, jp_title, rating, produser, type, status, episode_count, duration, release_date, studio, genres, synopsis, episodes });
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data', details: err.message });
  }
};
