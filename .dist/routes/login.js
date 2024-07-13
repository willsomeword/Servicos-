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
const login_controller_1 = require("../controller/login_controller");
const loginRouter = express_1.default.Router();
//aplicação monolitica é tudo nela mesmo , tanto o core e auth
loginRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginDTO = req.body;
    const logedData = yield login_controller_1.LoginController.login(loginDTO);
    if (logedData) {
        res.status(200).send(logedData);
    }
    else {
        res.sendStatus(400);
    }
}));
exports.default = loginRouter;
