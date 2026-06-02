const request = require("supertest");
const app = require("../app");

describe("Weather API", () => {
  test("GET weather for Lahore", async () => {
    const response = await request(app).get("/api/weather/Lahore");

    expect(response.statusCode).toBe(200);

    expect(response.body).toHaveProperty("city");
    expect(response.body).toHaveProperty("temperature");
    expect(response.body).toHaveProperty("condition");
    expect(response.body).toHaveProperty("humidity");
  });
});
