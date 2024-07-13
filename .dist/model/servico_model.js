"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const servicoSchema = new mongoose_1.default.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: false },
    valor: { type: Number, required: true },
    tempoServico: { type: Number, required: false },
    ativo: { type: Boolean, required: true },
    funcionario: { type: mongoose_1.default.Types.ObjectId, ref: "funcionarios" },
    cliente: { type: mongoose_1.default.Types.ObjectId, ref: "clientes" },
    status: { type: Number, required: true },
}, {
    versionKey: false,
});
const Servico = mongoose_1.default.model("servicos", servicoSchema);
exports.default = Servico;
