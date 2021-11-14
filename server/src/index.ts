import cors from "cors";
import morgan from "morgan";
import express from "express";

import { PORT } from "./config";
import { pingRouter } from "./routers";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

app.use("/ping", pingRouter);

app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});
