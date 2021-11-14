import mongoose from "mongoose";

interface Lobby {
  lobbyOwner: string;
  participants: string[];
  allHaveParticipated?: boolean;
  shuffledList: string[];
}

const lobbySchema = new mongoose.Schema<Lobby>(
  {
    lobbyOwner: {
      type: String,
      minlength: 3,
      required: true,
    },
    participants: [
      {
        type: String,
        minlength: 3,
      },
    ],
    shuffledList: [
      {
        type: String,
        minlength: 3,
      },
    ],
    allHaveParticipated: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
  }
);

export default mongoose.model<Lobby>("Lobby", lobbySchema);
