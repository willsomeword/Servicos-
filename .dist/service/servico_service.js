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
exports.ServicoService = void 0;
const servico_model_1 = __importDefault(require("../model/servico_model"));
const cliente_1 = __importDefault(require("../model/cliente"));
const funcionario_model_1 = __importDefault(require("../model/funcionario_model"));
class ServicoService {
    static createService(serviceDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundFuncionario = yield funcionario_model_1.default.findById(serviceDTO.funcionario);
                const foundCliente = yield cliente_1.default.findById(serviceDTO.cliente);
                const serviceMapped = new servico_model_1.default({
                    nome: serviceDTO.nome,
                    descricao: serviceDTO.descricao,
                    valor: serviceDTO.valor,
                    tempoServico: serviceDTO.tempoServico,
                    ativo: serviceDTO.ativo,
                    funcionario: foundFuncionario,
                    cliente: foundCliente,
                    status: serviceDTO.status,
                });
                const saveService = serviceMapped.save();
                return saveService;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getAllService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allDataService = yield servico_model_1.default.find({}).populate([{ path: "funcionario" }, { path: "cliente" },]);
                return allDataService;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getServiceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataById = yield servico_model_1.default.findById(id).populate([{ path: "funcionario" }, { path: "cliente" },]);
                return dataById;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static updateService(id, servicoDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatingServico = yield servico_model_1.default.findByIdAndUpdate(id, servicoDTO);
                if (updatingServico) {
                    const updateData = yield servico_model_1.default.findById(id);
                    return updateData;
                }
                else {
                    return undefined;
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static deleteService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletingServico = yield servico_model_1.default.findOneAndDelete({ _id: id });
                if (deletingServico) {
                    return deletingServico; // Type assertion
                }
                else {
                    return null;
                }
            }
            catch (erro) {
                console.log(erro);
            }
        });
    }
}
exports.ServicoService = ServicoService;
