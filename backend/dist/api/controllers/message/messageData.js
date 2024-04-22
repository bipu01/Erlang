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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactUs_model_1 = __importDefault(require("../../../db/models/contactUs.model"));
const postContactUsMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message } = req.body;
    if (message) { // Check if contactUsMessage is present
        try {
            const newContactUsMessage = new contactUs_model_1.default({
                message,
            });
            console.log(message);
            yield newContactUsMessage.save();
            res.status(200).json(newContactUsMessage);
        }
        catch (error) {
            // Sending error message
            res.status(500).json({ error: "Internal server error" });
        }
    }
    else {
        // Sending error if message is not present
        res.status(400).json({ error: "Message is required" });
    }
});
exports.default = postContactUsMessage;
