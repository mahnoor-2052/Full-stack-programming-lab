const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`,
    );

    const weather = response.data;

    res.status(200).json({
      city: weather.name,
      temperature: weather.main.temp,
      condition: weather.weather[0].description,
      humidity: weather.main.humidity,
    });
  } catch (error) {
    console.log("FULL ERROR:");
    console.log(error.response?.data);

    res.status(404).json({
      success: false,
      message: error.response?.data || error.message,
    });
  }
});

module.exports = router;
