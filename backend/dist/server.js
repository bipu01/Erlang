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
exports.start = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const cors_1 = __importDefault(require("cors"));
const dress_1 = __importDefault(require("./api/routes/dress"));
const postProduct_1 = __importDefault(require("./api/routes/postProduct"));
const jewellery_1 = __importDefault(require("./api/routes/jewellery"));
const footwear_1 = __importDefault(require("./api/routes/footwear"));
const contactUs_1 = __importDefault(require("./api/routes/contactUs"));
const user_1 = __importDefault(require("./api/routes/user"));
const featuredProductRouter_1 = __importDefault(require("./api/routes/featuredProductRouter"));
const mongoose_1 = __importDefault(require("mongoose"));
const searchRouter_1 = __importDefault(require("./api/routes/searchRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// const allowedOrigins = ["https://erlang.vercel.app/"];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
const corsOptions = {
    origin: ['https://erlang.vercel.app', 'http://localhost:5173'], // Allow only this origin
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use((0, cors_1.default)(corsOptions));
const PORT = config_1.default.port || 3000;
app.get("/", (req, res) => {
    res.json({ message: "Hello from Erlang backend" });
});
app.use("/api/postProduct", postProduct_1.default);
app.use("/api/user", user_1.default);
app.use("/api/getEveryFeatured", featuredProductRouter_1.default);
app.use("/api/dress", dress_1.default);
app.use("/api/jewellery", jewellery_1.default);
app.use("/api/footwear", footwear_1.default);
app.use("/api/message", contactUs_1.default);
app.use("/api/search", searchRouter_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(config_1.default.mongoURI);
        app.listen(PORT, () => {
            console.log(`server running in port ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.start = start;
(0, exports.start)();
