import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const url = "https://otakudesu.best/";
    const { data } = await axios.get(url, { timeout: 8000 });
    const $ = cheerio.load(data);

    const animeList = [];
    $(".venz ul li").each((i, el) => {
      const title = $(el).find(".jdlflm").text().trim();
      const eps = $(el).find(".epz").text().trim();
      const date = $(el).find(".newnime").text().trim();
      const img = $(el).attr("src") || $(el).find("img").attr("src");
      animeList.push({ title, eps, date, img });
    });

    res.status(200).json(animeList);
  } catch (err) {
    console.error('Scraping error:', err);
    res.status(500).json({
      error: 'Gagal mengambil data',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
  }
}
