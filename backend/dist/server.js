"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const cors_1 = __importDefault(require("cors"));
const dress_1 = __importDefault(require("./api/routes/dress"));
const postProduct_1 = __importDefault(require("./api/routes/postProduct"));
const jewellery_1 = __importDefault(require("./api/routes/jewellery"));
const footwear_1 = __importDefault(require("./api/routes/footwear"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: `http://localhost:5173`,
    optionsSuccessStatus: 200
}));
app.get("/", (req, res) => {
    res.json({ message: "Hello from Erlang backend" });
});
app.use("/api/postProduct", postProduct_1.default);
app.use("/api/dress", dress_1.default);
app.use("/api/jewellery", jewellery_1.default);
app.use("/api/footwear", footwear_1.default);
app.listen(config_1.default.port, () => {
    console.log(`server running in port ${config_1.default.port}`);
});
