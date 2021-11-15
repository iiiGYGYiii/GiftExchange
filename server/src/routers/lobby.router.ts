import { Router } from "express";
import { LobbyType } from "../mongo/models/Lobby.model";
import {
  createLobby,
  fetchMatchedParticipant,
  killLobby,
} from "../mongo/queries/lobby.query";
import { getCount } from "../mongo/queries/counter.query";

const lobbyRouter = Router();

lobbyRouter
  .route("/")
  .get(async (_req, res) => {
    const count = await getCount();
    res
      .json({
        lobbiesCreated: count,
      })
      .end();
  })
  .post(async (req, res) => {
    const { lobbyOwner, participants } = req.body as Omit<
      LobbyType,
      "_id" | "shuffledList"
    >;
    try {
      const lobbyCreated = (await createLobby(lobbyOwner, [
        ...participants,
        lobbyOwner,
      ])) as LobbyType;
      if (lobbyOwner.length < 3 || participants.length < 3)
        throw new Error("Incorrect inputs.");

      res
        .status(200)
        .json({
          message: "Lobby created successfully.",
          lobbyId: lobbyCreated._id,
        })
        .end();
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          message: error.message,
        });
      }
      res
        .status(400)
        .json({
          error: "Lobby couldn't be created, please try again later.",
        })
        .end();
    }
  });

lobbyRouter
  .route("/:lobbyId")
  .post(async (req, res) => {
    const { lobbyId } = req.params;
    const { participant } = req.body as {
      participant: string;
    };
    const matchedParticipant = await fetchMatchedParticipant(
      participant,
      lobbyId
    );
    res
      .status(200)
      .json({
        matchedParticipant,
      })
      .end();
  })
  .delete(async (req, res) => {
    const { lobbyId } = req.params;
    await killLobby(lobbyId);
    res.status(200).end();
  });

export default lobbyRouter;
