import cors from "cors";
import morgan from "morgan";
import express from "express";

import { lobbyRouter, pingRouter } from "../routers";

const apiV1: (s: string) => string = (route) => `/api/v1/${route}`;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

app.use(apiV1("ping"), pingRouter);

app.use(apiV1("lobby"), lobbyRouter);

export default app;
