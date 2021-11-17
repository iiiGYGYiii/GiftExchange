import { useState } from "react";
import { Lobby, Notification } from "../../components";
import useErrorNotify from "../../hooks/errorNotify.hook";
import { getLobbyOwner } from "../../services/lobby.services";

import "./SearchLobby.styles.scss";

export default function SearchLobby() {
  const [lobbyOwner, setLobbyOwner] = useState<string | undefined>();
  const [search, setSearch] = useState<string>("");
  const [error, updateError] = useErrorNotify();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { lobbyOwner } = (await getLobbyOwner(search)) as {
        lobbyOwner: string;
      };
      if (lobbyOwner) {
        setLobbyOwner(lobbyOwner);
        return;
      }
      updateError("No se encontró el lobby. Por favor verifica el código.");
    } catch (error) {
      updateError("No se encontró el lobby. Por favor verifica el código.");
    }
  };
  if (lobbyOwner) return <Lobby lobbyId={search} lobbyOwner={lobbyOwner} />;
  return (
    <div className="search-lobby">
      {error ? <Notification message={error} error={true} /> : null}
      <header>
        <h1>BUSCADOR DE SALAS:</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
