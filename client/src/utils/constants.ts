interface RoutesType {
  lobby: string;
  home: string;
  createLobby: string;
  searchLobby: string;
}

interface Endpoints {
  lobbyEndpoint: string;
}

export const routes: RoutesType = {
  lobby: "/lobby",
  home: "/",
  createLobby: "/create-lobby",
  searchLobby: "/search-lobby",
};

export const apiEndpoints: Endpoints = {
  lobbyEndpoint: "/api/v1/lobby",
};
