"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
var config_1 = require("./config");
var mongo_1 = __importDefault(require("./mongo"));
server_1.default.listen(config_1.PORT, function () {
    void (0, mongo_1.default)(); // Creates the connection with MongoDB
    console.log("Server listening on Port: " + config_1.PORT);
});
