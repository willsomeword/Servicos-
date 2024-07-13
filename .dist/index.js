"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routes_1 = require("./routes");
const db_1 = __importDefault(require("./repository/db"));
const cors_1 = __importDefault(require("cors"));
// estabelecer a conexao
db_1.default.on("error", () => console.log("error em estabelecer conexao"));
db_1.default.once("open", () => {
    console.log("conexao estabelecida com o banco");
});
// cria uma instancia  do express
const app = (0, express_1.default)();
//cors
app.use((0, cors_1.default)());
// definindo a nossa 
(0, routes_1.routes)(app);
app.listen(process.env.PORTA, () => {
    console.log("servidor rodando na port:" + process.env.PORTA);
});
