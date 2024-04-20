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
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const cors_1 = __importDefault(require("cors"));
const dress_1 = __importDefault(require("./api/routes/dress"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: `http://localhost:5173`,
    optionsSuccessStatus: 200
}));
// app.use(cookieParser())
app.get("/", (req, res) => {
    res.json({ message: "Hello from Erlang backend" });
});
// app.use("/api/dress/getFeaturedDress", dressRoute)
app.use("/api/dress", dress_1.default);
app.post("/postProduct", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
app.listen(config_1.default.port, () => {
    console.log(`server running in port ${config_1.default.port}`);
});
