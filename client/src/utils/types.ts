export type lobbyOwner = string;
export type participants = string[];
export type lobbyCreationData =
  | string
  | {
      error: string;
    };
export type lobbyCreationFunction = (
  lobbyData: postLobbyData
) => lobbyCreationData;
interface lobbyCreatedSuccessfully {
  message: "Lobby created successfully";
  lobbyId: string;
  error: false;
}
export type failedLobbyCreation =
  | {
      error: true;
      message: string;
    }
  | {
      error: true;
      message: string;
    };
export type fetchedLobbyCreation =
  | lobbyCreatedSuccessfully
  | failedLobbyCreation;

export interface postLobbyData {
  lobbyOwner: string;
  participants: string[];
}
