"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messageData_1 = __importDefault(require("../controllers/message/messageData"));
const express_1 = __importDefault(require("express"));
const contactUsRouter = express_1.default.Router();
contactUsRouter.route("/contactUsMessage").post(messageData_1.default);
exports.default = contactUsRouter;
