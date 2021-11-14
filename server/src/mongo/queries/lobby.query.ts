import { Lobby } from "../models";
import { LobbyType } from "../models/Lobby.model";
import { createIdentifier } from "../../utils/identifier";
import { shuffleExchangeList } from "../../utils/exchange";

export async function createLobby(
  lobbyOwner: string,
  participants: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const shuffledList = shuffleExchangeList(participants);
  const lobbyData: LobbyType = {
    lobbyOwner,
    participants,
    shuffledList,
    _id: createIdentifier(),
  };
  const newLobby = new Lobby(lobbyData);
  try {
    return await newLobby.save();
  } catch (error) {
    return {
      error: "There ocurred and error, try again later.",
    };
  }
}
