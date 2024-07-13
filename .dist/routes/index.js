"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const cliente_1 = __importDefault(require("./cliente"));
const funcionario_1 = __importDefault(require("./funcionario"));
const servico_1 = __importDefault(require("./servico"));
const login_1 = __importDefault(require("./login"));
const routes = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send({ message: "api serviços" });
    });
    app.use(express_1.default.json(), cliente_1.default, funcionario_1.default, servico_1.default, login_1.default);
};
exports.routes = routes;
