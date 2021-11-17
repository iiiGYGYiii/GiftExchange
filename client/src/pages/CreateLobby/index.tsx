import useLobbyForm from "../../hooks/lobbyForm.hook";

import "./CreateLobby.styles.scss";

import {
  TableForm,
  TableInput,
  Notification,
  DisplayLobby,
  Participants,
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
      {error ? (
        <Notification message={error.message} error={error.error} />
      ) : null}
      <TableForm submitText="¡Crear Sala!" handleSubmit={handleSubmit}>
        <>
          <TableInput
            textLabel="Organizador"
            inputId="lobby-owner"
            inputValue={lobbyOwner}
            handleKey={handleOwnerKey}
            handleChange={handleOwnerChange}
            textButton="¡OK!"
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
      <Participants participants={participants} />
    </div>
  );
}
