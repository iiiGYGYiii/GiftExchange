"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PWD = exports.MONGO_URI = exports.PORT = void 0;
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.NODE_ENV === "development" ? 3001 : process.env.PORT || 3000;
exports.MONGO_URI = process.env.NODE_ENV === "development"
    ? process.env.MONGO_DEV_URI
    : process.env.MONGO_PROD_URI;
var cwd = process.cwd().split("\\");
cwd.pop();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
exports.PWD = process.env.NODE_ENV === "development"
    ? path_1.default.join(cwd.join("\\"), "client/client/")
    : path_1.default.join(process.cwd(), "build/client/");
