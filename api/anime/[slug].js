import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    const url = `https://otakudesu.best/anime/${slug}`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $('.jdlrx').text().trim();
    const info = [];
    $('.infozin').each((i, el) => {
      const key = $(el).find('td:nth-child(1)').text().trim();
      const value = $(el).find('td:nth-child(2)').text().trim();
      info.push({ key, value });
    });

    const episodes = [];
    $('.episodelist ul li').each((i, el) => {
      const epsTitle = $(el).find('a').text().trim();
      const epsLink = $(el).find('a').attr('href');
      episodes.push({ epsTitle, epsLink });
    });

    res.status(200).json({ title, info, episodes });
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data', details: err.message });
  }
};
