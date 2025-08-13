import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const url = "https://otakudesu.best/";
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

    const animeList = [];
    $(".venz ul li").each((i, el) => {
      const title = $(el).find(".jdlflm").text().trim();
      const eps = $(el).find(".epz").text().trim();
      const date = $(el).find(".newnime").text().trim();
      const link = $(el).find("a").attr("href").split("/").slice(-2, -1).join("/");
      const img = $(el).attr("src") || $(el).find("img").attr("src");
      animeList.push({ title, eps, date, link, img });
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
