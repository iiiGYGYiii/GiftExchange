import { Response, Request, NextFunction } from "express";
import { LobbyType } from "../../mongo/models/Lobby.model";

function cleanInput(str: string): string {
  return str.trim().replace(/\s+/, " ").toLowerCase();
}

export default function cleanInputMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  if (req.method === "POST") {
    if (req.url === "/") {
      const { body } = req as {
        body: Omit<LobbyType, "_id" | "shuffledList">;
      };
      body.lobbyOwner = cleanInput(body.lobbyOwner);
      body.participants = body.participants.map(cleanInput);
      req.body = body;
    } else {
      const { body } = req as {
        body: {
          participant: string;
        };
      };
      body.participant = cleanInput(body.participant);
      req.body = body;
    }
  }
  next();
}
