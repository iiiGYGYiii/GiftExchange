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
