import { Router } from "express";
import { getCount } from "../mongo/queries/counter.query";

const lobbyRouter = Router();

lobbyRouter.route("/").get(async (_req, res) => {
  const count = await getCount();
  res
    .json({
      timesVisited: count,
    })
    .end();
});

export default lobbyRouter;
