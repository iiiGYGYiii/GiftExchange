"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var lobby_query_1 = require("../mongo/queries/lobby.query");
var counter_query_1 = require("../mongo/queries/counter.query");
var lobbyRouter = (0, express_1.Router)();
lobbyRouter
    .route("/")
    .get(function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var count;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, counter_query_1.getCount)()];
            case 1:
                count = _a.sent();
                res
                    .json({
                    lobbiesCreated: count,
                })
                    .end();
                return [2 /*return*/];
        }
    });
}); })
    .post(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, lobbyOwner, participants, lobbyCreated, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, lobbyOwner = _a.lobbyOwner, participants = _a.participants;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, lobby_query_1.createLobby)(lobbyOwner, __spreadArray(__spreadArray([], participants, true), [
                        lobbyOwner,
                    ], false))];
            case 2:
                lobbyCreated = (_b.sent());
                if (lobbyOwner.length < 3 || participants.length < 3)
                    throw new Error("Incorrect inputs.");
                res
                    .status(200)
                    .json({
                    message: "Lobby created successfully.",
                    lobbyId: lobbyCreated._id,
                })
                    .end();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                if (error_1 instanceof Error) {
                    res.status(400).json({
                        error: true,
                        message: error_1.message,
                    });
                }
                res
                    .status(400)
                    .json({
                    error: true,
                    message: "Lobby couldn't be created, please try again later.",
                })
                    .end();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
lobbyRouter
    .route("/:lobbyId")
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var lobbyId, lobbyOwner, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                lobbyId = req.params.lobbyId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, lobby_query_1.fetchLobbyAndOwner)(lobbyId)];
            case 2:
                lobbyOwner = _a.sent();
                if (lobbyOwner) {
                    res
                        .status(200)
                        .json({
                        lobbyOwner: lobbyOwner,
                    })
                        .end();
                    return [2 /*return*/];
                }
                res
                    .status(404)
                    .json({
                    message: "Lobby not found",
                    error: true,
                })
                    .end();
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.status(404).json({
                    lobbyOwner: "Not found",
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); })
    .post(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var lobbyId, participant, matchedParticipant;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                lobbyId = req.params.lobbyId;
                participant = req.body.participant;
                return [4 /*yield*/, (0, lobby_query_1.fetchMatchedParticipant)(participant, lobbyId)];
            case 1:
                matchedParticipant = _a.sent();
                res
                    .status(200)
                    .json({
                    matchedParticipant: matchedParticipant,
                })
                    .end();
                return [2 /*return*/];
        }
    });
}); })
    .delete(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var lobbyId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                lobbyId = req.params.lobbyId;
                return [4 /*yield*/, (0, lobby_query_1.killLobby)(lobbyId)];
            case 1:
                _a.sent();
                res.status(200).end();
                return [2 /*return*/];
        }
    });
}); });
exports.default = lobbyRouter;
