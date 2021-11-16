import { FormEventHandler, useState } from "react";
import { postLobbyData } from "../../utils/types";
import "./CreateLobby.styles.scss";

const initialLobbyData: postLobbyData = {
  lobbyOwner: "",
  participants: [],
};

const initialParticipantState = "";

export default function CreateLobby() {
  return <div className="lobby-create-container"></div>;
}
