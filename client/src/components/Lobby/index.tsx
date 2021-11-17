import axios from "axios";
import { useState } from "react";
import { Notification } from "..";
import useErrorNotify from "../../hooks/errorNotify.hook";
import { getMatchedPerson } from "../../services/lobby.services";

import "./Lobby.styles.scss";

export default function Lobby({
  lobbyId,
  lobbyOwner,
}: {
  lobbyId: string;
  lobbyOwner: string;
}) {
  const [participantSearcher, setParticipantSearcher] = useState<string>("");
  const [hasMatched, setHasMatched] = useState<boolean>(false);
  const [matchedPair, setMatchedPair] = useState<string | undefined>();
  const [error, updateError] = useErrorNotify();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const matchedParticipant = (await getMatchedPerson(
        lobbyId,
        participantSearcher
      )) as string | { error: number; message: string };
      if (typeof matchedParticipant === "string") {
        setHasMatched(true);
        setMatchedPair(matchedParticipant);
        return;
      }
      updateError({ message: matchedParticipant.message, error: 2 });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        updateError({
          message: error.response?.data.message,
          error: 2,
        });
        return;
      }
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParticipantSearcher(event.target.value);
  };
  return (
    <div className="lobby-container">
      <header>
        <h1>
          SALA: <span>{lobbyId}</span>
        </h1>
        <h2>
          ORGANIZADOR: <span>{lobbyOwner}</span>
        </h2>
      </header>

      {hasMatched ? (
        <div className="display-matched">
          <h2>El destino te asignó:</h2>
          <div className="matched-neon">{matchedPair}</div>
        </div>
      ) : (
        <div className="matcher-form">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Tu nombre aquí"
              type="text"
              onChange={handleChange}
              value={participantSearcher}
              required
            />
            <input type="submit" value="¿A quién me asignaron?" />
          </form>
          {error ? (
            <Notification error={error.error} message={error.message} />
          ) : null}
        </div>
      )}
    </div>
  );
}
