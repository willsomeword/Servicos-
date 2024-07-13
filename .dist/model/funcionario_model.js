"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("debug", true);
const funcionarioSchema = new mongoose_1.default.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    dataAdmissao: { type: Date, required: false, default: Date.now },
    dataDemissao: { type: Date, required: false },
    obsDemissao: { type: String, required: false },
    rua: { type: String, required: true },
    bairro: { type: String, required: true },
    cep: { type: String, required: true },
    foto: { type: String, required: false },
    ativo: { type: String, required: false },
    salario: { type: Number, required: true },
    admin: { type: Boolean, required: false, default: false },
}, { versionKey: false });
const Funcionario = mongoose_1.default.model("funcionarios", funcionarioSchema);
exports.default = Funcionario;
