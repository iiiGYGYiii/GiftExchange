"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var counterSchema = new mongoose_1.Schema({
    name: String,
    count: {
        type: Number,
        required: true,
        default: 0,
    },
});
exports.default = (0, mongoose_1.model)("Counter", counterSchema);
