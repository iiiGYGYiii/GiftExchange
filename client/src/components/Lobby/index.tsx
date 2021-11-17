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
      const matchedParticipant = await getMatchedPerson(
        lobbyId,
        participantSearcher
      );
      if (!matchedParticipant.error) {
        setHasMatched(true);
        setMatchedPair(matchedParticipant);
      }
    } catch (error) {
      updateError("No se encontró el nombre en la sala.");
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParticipantSearcher(event.target.value);
  };
  return (
    <div className="lobby-container">
      <header>
        <h1>SALA: {lobbyId}</h1>
        <h2>ORGANIZADOR: {lobbyOwner}</h2>
      </header>

      {hasMatched ? (
        <div className="display-matched">{matchedPair}</div>
      ) : (
        <div className="matcher-form">
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={participantSearcher} />
            <input type="submit" value="¿A quién me asignaron?" />
          </form>
          {error ? <Notification error={true} message={error} /> : null}
        </div>
      )}
    </div>
  );
}
