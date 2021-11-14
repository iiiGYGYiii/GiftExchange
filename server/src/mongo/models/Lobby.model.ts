import mongoose from "mongoose";

export interface LobbyType {
  lobbyOwner: string;
  participants: string[];
  allHaveParticipated?: boolean;
  shuffledList: string[];
  _id: string;
}

const lobbySchema = new mongoose.Schema<Omit<LobbyType, "_id">>(
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

lobbySchema.set("toJSON", {
  transform: (
    _document,
    returnedObject: LobbyType & { _id: string; __v?: string; id: string }
  ) => ({
    id: returnedObject._id,
    lobbyOwner: returnedObject.lobbyOwner,
    participants: returnedObject.participants,
    shuffledList: returnedObject.shuffledList,
  }),
});

export default mongoose.model<LobbyType>("Lobby", lobbySchema);
