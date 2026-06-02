require("dotenv").config();

const express = require("express");
const cors = require("cors");

const weatherRoutes = require("./routes/weatherRoutes");
const newsRoutes = require("./routes/newsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRoutes);
app.use("/api/news", newsRoutes);

module.exports = app;
