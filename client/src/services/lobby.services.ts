import axios from "axios";
import { apiEndpoints } from "../utils/constants";
import { fetchedLobbyCreation, postLobbyData } from "../utils/types";

export async function createLobby(
  postLobbyData: postLobbyData
): Promise<{ lobbyId: string } | { error: string }> {
  try {
    const { data } = await axios.post<fetchedLobbyCreation>(
      apiEndpoints.lobbyEndpoint,
      postLobbyData
    );
    if (data.error) return { error: data.message };
    return {
      lobbyId: data.lobbyId,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "An error has ocurred! Please try again later",
    };
  }
}

interface FetchedRight {
  lobbyOwner: string;
}

interface FetchedWrong {
  error: boolean;
  message: string;
}

type LobbyFetchType = FetchedRight & FetchedWrong;

export async function getLobbyOwner(
  lobbyId: string
): Promise<{ lobbyOwner: string } | { error: string }> {
  try {
    const { data } = await axios.get<LobbyFetchType>(
      `${apiEndpoints.lobbyEndpoint}/${lobbyId}`
    );
    if (data.error) return { error: data.message };
    return {
      lobbyOwner: data.lobbyOwner,
    };
  } catch (error) {
    return { error: "No se encontró la sala." };
  }
}
