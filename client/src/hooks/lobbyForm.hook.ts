import { useState } from "react";
import { createLobby } from "../services/lobby.services";
import { postLobbyData } from "../utils/types";

const initialLobbyData: postLobbyData = {
  lobbyOwner: "",
  participants: [],
};

const initialParticipantState = "";

const checkMinLength: (s: string) => boolean = (s) => s.length >= 3;
const nameRepeat: (s: string, a: string[]) => boolean = (
  s: string,
  a: string[]
) => a.includes(s);
const checkMinSize: (a: string[]) => boolean = (a) => a.length >= 3;

const useLobbyForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [timeoutID, setTimeoutID] = useState<number | undefined>();
  const [formData, setFormData] = useState<postLobbyData>(initialLobbyData);
  const [participant, setParticipant] = useState<string>(
    initialParticipantState
  );
  const [ownerIsSet, setOwnerIsSet] = useState<boolean>(false);
  const [lobbyId, setLobbyId] = useState<string | undefined>();

  const updateError = (msg: string) => {
    setError(msg);
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    const toID = setTimeout(() => setError(undefined), 5000);
    setTimeoutID(toID);
  };

  const addOwnerName = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (!checkMinLength(formData.lobbyOwner)) {
      updateError("Los nombres deben tener mínimo 3 caracteres.");
      event.preventDefault();
      return;
    }
    if (nameRepeat(formData.lobbyOwner, formData.participants)) {
      updateError(
        `Los participantes deben tener un nombre único. (Trata: ${participant}1)`
      );
      event.preventDefault();
      return;
    }
    setOwnerIsSet((prevState) => !prevState);
  };

  const addParticipantName = (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (!checkMinLength(participant)) {
      updateError("Los nombres deben tener mínimo 3 caracteres.");
      event.preventDefault();
      return;
    }
    if (
      nameRepeat(participant, formData.participants.concat(formData.lobbyOwner))
    ) {
      updateError(
        `Los participantes deben tener un nombre único. (Trata: ${participant}1)`
      );
      event.preventDefault();
      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      participants: [...prevState.participants, participant],
    }));
    setParticipant(initialParticipantState);
    event.preventDefault();
  };

  const handleOwnerChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ ...prevState, lobbyOwner: target.value }));
  };
  const handleParticipantChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setParticipant(target.value);
  };
  const handleOwnerKey = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addOwnerName(event);
    }
  };
  const handleParticipantKey = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addParticipantName(event);
    }
  };

  const handleOwnerClick = (event: React.MouseEvent) => {
    event.preventDefault();
    addOwnerName(event);
  };
  const handleParticipantClick = (event: React.MouseEvent) => {
    event.preventDefault();
    addParticipantName(event);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!checkMinSize(formData.participants)) {
      updateError(
        "¡El mínimo número de participantes es 3(tres)! (2 participantes y 1 organizador)"
      );
      return;
    }
    const result = (await createLobby(formData)) as { lobbyId: string };
    setLobbyId(result.lobbyId);
  };

  return {
    handleOwnerChange,
    handleParticipantChange,
    handleOwnerKey,
    handleParticipantKey,
    ownerIsSet,
    handleSubmit,
    handleOwnerClick,
    handleParticipantClick,
    lobbyOwner: formData.lobbyOwner,
    participant,
    participants: formData.participants,
    error,
    lobbyId,
  };
};

export default useLobbyForm;
