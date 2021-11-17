import useLobbyForm from "../../hooks/lobbyForm.hook";

import "./CreateLobby.styles.scss";

import {
  TableForm,
  TableInput,
  Notification,
  DisplayLobby,
} from "../../components";

export default function CreateLobby() {
  const {
    handleSubmit,
    lobbyOwner,
    handleOwnerKey,
    handleOwnerChange,
    handleOwnerClick,
    participant,
    handleParticipantKey,
    handleParticipantChange,
    handleParticipantClick,
    participants,
    ownerIsSet,
    error,
    lobbyId,
  } = useLobbyForm();

  if (lobbyId)
    return (
      <DisplayLobby
        lobbyOwner={lobbyOwner}
        lobbyId={lobbyId}
        participants={participants}
      />
    );

  return (
    <div className="lobby-create-container">
      {error ? <Notification message={error} error={true} /> : null}
      <TableForm submitText="¡Crear Sala!" handleSubmit={handleSubmit}>
        <>
          <TableInput
            textLabel="Organizador"
            inputId="lobby-owner"
            inputValue={lobbyOwner}
            handleKey={handleOwnerKey}
            handleChange={handleOwnerChange}
            textButton="Declararse"
            handleClick={handleOwnerClick}
            disabled={ownerIsSet}
            required={true}
          />
          <TableInput
            textLabel="Participante"
            inputId="participant"
            inputValue={participant}
            handleKey={handleParticipantKey}
            handleChange={handleParticipantChange}
            textButton="Añadir"
            handleClick={handleParticipantClick}
          />
        </>
      </TableForm>
      {participants.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}
