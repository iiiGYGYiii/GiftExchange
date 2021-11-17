"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var lobbySchema = new mongoose_1.default.Schema({
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
    _id: {
        type: String,
        required: true,
        minlength: 9,
    },
});
lobbySchema.set("toJSON", {
    transform: function (_document, returnedObject) { return ({
        id: returnedObject._id,
        lobbyOwner: returnedObject.lobbyOwner,
        participants: returnedObject.participants,
        shuffledList: returnedObject.shuffledList,
    }); },
});
exports.default = mongoose_1.default.model("Lobby", lobbySchema);
