import app from "../server";
import mongoose from "mongoose";
import supertest from "supertest";

// eslint-disable-next-line
const api = supertest(app);

it("Ping router returns PONG", async () => {
  // eslint-disable-next-line
  const xd = await api
    .get("/api/v1/ping")
    .expect(200)
    .expect("Content-Type", /text\/html/);
  expect(xd.text).toEqual("PONG");
});

afterAll(async () => {
  await mongoose.connection.close();
});
