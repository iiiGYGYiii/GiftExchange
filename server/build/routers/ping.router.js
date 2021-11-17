"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pingRouter = (0, express_1.Router)();
pingRouter.route("/").get(function (_req, res) {
    res.send("PONG").end();
});
exports.default = pingRouter;
