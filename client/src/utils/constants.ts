interface RoutesType {
  lobby: string;
  home: string;
  createLobby: string;
  searchLobby: string;
}

export const routes: RoutesType = {
  lobby: "/lobby",
  home: "/",
  createLobby: "/create-lobby",
  searchLobby: "/search-lobby",
};
