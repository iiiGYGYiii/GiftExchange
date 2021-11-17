"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lobbyRouter = exports.pingRouter = void 0;
var ping_router_1 = require("./ping.router");
Object.defineProperty(exports, "pingRouter", { enumerable: true, get: function () { return __importDefault(ping_router_1).default; } });
var lobby_router_1 = require("./lobby.router");
Object.defineProperty(exports, "lobbyRouter", { enumerable: true, get: function () { return __importDefault(lobby_router_1).default; } });
