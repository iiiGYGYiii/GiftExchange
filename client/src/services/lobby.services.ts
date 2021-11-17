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
    const { data, status } = await axios.get<LobbyFetchType>(
      `${apiEndpoints.lobbyEndpoint}/${lobbyId}`
    );
    if (data.error || status !== 200) return { error: data.message };
    return {
      lobbyOwner: data.lobbyOwner,
    };
  } catch (error) {
    return { error: "No se encontró la sala." };
  }
}

export async function getMatchedPerson(lobbyId: string, participant: string) {
  try {
    const { data } = await axios.post(
      `${apiEndpoints.lobbyEndpoint}/${lobbyId}`,
      {
        participant,
      }
    );
    if (data.matchedParticipant.errorMsg) {
      return {
        error: true,
        message: data.matchedParticipant.errorMsg,
      };
    }
    return data.matchedParticipant;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data.message.endsWith("match!")) {
        return {
          error: 2,
          message: "Participante ya descubrió su emparejamiento.",
        };
      }
      if (error.response?.data.message.endsWith("exist")) {
        return {
          error: 2,
          message: "El participante no existe en esta sala.",
        };
      }
      return error.response?.data;
    }
    return {
      error: true,
      message: "No se encontró el nombre en la sala.",
    };
  }
}
