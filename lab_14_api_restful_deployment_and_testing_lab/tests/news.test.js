const request = require("supertest");
const app = require("../app");

describe("News API", () => {
  test("GET US news", async () => {
    const response = await request(app).get("/api/news/us");

    expect(response.statusCode).toBe(200);

    expect(response.body).toHaveProperty("country");
    expect(response.body).toHaveProperty("articles");
  });
});
