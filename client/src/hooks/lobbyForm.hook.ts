import { useState } from "react";
import { createLobby } from "../services/lobby.services";
import { postLobbyData } from "../utils/types";
import useErrorNotify, { NotifyError } from "./errorNotify.hook";

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

const minLengthError: NotifyError = {
  error: 2,
  message: "Los nombres deben tener mínimo 3 caracteres.",
};

const minParticipantsError: NotifyError = {
  error: 2,
  message:
    "¡El mínimo número de participantes es 3(tres)! (2 participantes y 1 organizador)",
};

const noRepeatError: (participant: string) => NotifyError = (participant) => ({
  error: 2,
  message: `Los participantes deben tener un nombre único. (Trata: ${participant}1)`,
});

const useLobbyForm = () => {
  const [error, updateError] = useErrorNotify();
  const [formData, setFormData] = useState<postLobbyData>(initialLobbyData);
  const [participant, setParticipant] = useState<string>(
    initialParticipantState
  );
  const [ownerIsSet, setOwnerIsSet] = useState<boolean>(false);
  const [lobbyId, setLobbyId] = useState<string | undefined>();

  const addOwnerName = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (!checkMinLength(formData.lobbyOwner)) {
      updateError(minLengthError);
      event.preventDefault();
      return;
    }
    if (nameRepeat(formData.lobbyOwner, formData.participants)) {
      updateError(noRepeatError(formData.lobbyOwner));
      event.preventDefault();
      return;
    }
    setOwnerIsSet((prevState) => !prevState);
  };

  const addParticipantName = (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (!checkMinLength(participant)) {
      updateError(minLengthError);
      event.preventDefault();
      return;
    }
    if (
      nameRepeat(participant, formData.participants.concat(formData.lobbyOwner))
    ) {
      updateError(noRepeatError(participant));
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
      updateError(minParticipantsError);
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
