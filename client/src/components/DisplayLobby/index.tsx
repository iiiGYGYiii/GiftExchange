import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Notification, Participants } from "..";

import "./DisplayLobby.styles.scss";

export default function DisplayLobby({
  lobbyId,
  participants,
  lobbyOwner,
}: {
  lobbyId: string;
  participants: string[];
  lobbyOwner: string;
}) {
  const [toID, setToID] = useState<number | undefined>();
  const [copied, setCopied] = useState<boolean>(false);
  const notifyCopied = () => {
    if (toID) {
      clearTimeout(toID);
    }
    setCopied(true);
    const timeout = setTimeout(() => setCopied(false), 2000);
    setToID(timeout);
  };

  return (
    <div className="display-lobby">
      {copied ? (
        <Notification error={0} message="¡Código copiado al portapapeles!" />
      ) : null}
      <h1 className="lobby-title">
        SALA:{" "}
        <span className="lobby-id">
          <CopyToClipboard onCopy={notifyCopied} text={lobbyId}>
            <span className="clipboard">
              {" "}
              {lobbyId} <i className="fas fa-clipboard"></i>
            </span>
          </CopyToClipboard>
        </span>
      </h1>
      <h2>Organizador: {lobbyOwner}</h2>
      <div className="participants-container">
        <h3>Participantes: ({participants.length + 1})</h3>
        <Participants participants={participants} />
      </div>
    </div>
  );
}
