import cors from "cors";
import morgan from "morgan";
import express from "express";
import path from "path";

import { PWD } from "../config";
import { lobbyRouter, pingRouter } from "../routers";

const apiV1: (s: string) => string = (route) => `/api/v1/${route}`;

const app = express();

app.use(express.static(path.join(PWD)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

app.use(apiV1("ping"), pingRouter);
app.use(apiV1("lobby"), lobbyRouter);

app.get("*", (_req, res) => {
  res.sendFile(path.join(PWD + "/client/index.html"));
});

export default app;
