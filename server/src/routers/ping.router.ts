import { Router } from "express";

const pingRouter = Router();

pingRouter.route("/").get((_req, res) => {
  res.send("PONG").end();
});

export default pingRouter;
