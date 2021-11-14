import { Lobby } from "../models";
import { LobbyType } from "../models/Lobby.model";
import { createIdentifier } from "../../utils/identifier";
import {
  getMatchedParticipant,
  shuffleExchangeList,
} from "../../utils/exchange";

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

export async function fetchMatchedParticipant(
  participant: string,
  lobbyId: string
): Promise<string | { errorMsg: string }> {
  try {
    const lobby = await Lobby.findById(lobbyId);
    if (!lobby?.participants.includes(participant))
      throw new Error("Participant doesn't exist");
    const matchedParticipant = getMatchedParticipant(
      lobby.participants,
      lobby.shuffledList,
      participant
    );
    return matchedParticipant;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errorMsg: error.message,
      };
    }
    return {
      errorMsg: "Something bad happen! Try again later",
    };
  }
}
