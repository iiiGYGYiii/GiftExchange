import cors from "cors";
import morgan from "morgan";
import express from "express";

import { pingRouter } from "../routers";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

app.use("/ping", pingRouter);

export default app;
