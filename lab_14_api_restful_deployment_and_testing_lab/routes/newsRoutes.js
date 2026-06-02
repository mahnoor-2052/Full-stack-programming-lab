const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:country", async (req, res) => {
  try {
    const country = req.params.country;

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}`,
    );

    const articles = response.data.articles.slice(0, 5).map((article) => ({
      title: article.title,
      source: article.source.name,
      url: article.url,
      publishedAt: article.publishedAt,
    }));

    res.status(200).json({
      country,
      totalArticles: articles.length,
      articles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching news",
    });
  }
});

module.exports = router;
