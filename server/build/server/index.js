"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var config_1 = require("../config");
var routers_1 = require("../routers");
var apiV1 = function (route) { return "/api/v1/" + route; };
var app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(config_1.PWD)));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("tiny"));
app.use(apiV1("ping"), routers_1.pingRouter);
app.use(apiV1("lobby"), routers_1.lobbyRouter);
app.get("*", function (_req, res) {
    res.sendFile(path_1.default.join(config_1.PWD + "/index.html")); // cmnt
});
exports.default = app;
