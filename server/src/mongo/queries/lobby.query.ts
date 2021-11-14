import { Lobby } from "../models";
import { LobbyType } from "../models/Lobby.model";
import { createIdentifier } from "../../utils/identifier";
import { shuffleExchangeList } from "../../utils/exchange";

export async function createLobby(
  lobbyOwner: string,
  participants: string[]
): Promise<void> {
  const shuffledList = shuffleExchangeList(participants);
  const lobbyData: LobbyType = {
    lobbyOwner,
    participants,
    shuffledList,
  };
  const newLobby = new Lobby(lobbyData);
  newLobby._id = createIdentifier();
  try {
    await newLobby.save();
  } catch (error) {
    console.error("WTF! XD");
  }
}
