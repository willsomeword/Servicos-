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
exports.ClientService = void 0;
const cliente_1 = __importDefault(require("../model/cliente"));
/*função esta dentro de um escopo geral , metdo esta dentro do escopo da classe*/
class ClientService {
    static getAllcliente() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Allclients = yield cliente_1.default.find({});
                return Allclients;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static createClient(objectDTO
    /*data transform object,  sempre que for trabalhar com banco fazer um try catch*/
    ) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = new cliente_1.default({
                    nome: objectDTO.nome,
                    dataNascimento: objectDTO.dataNascimento,
                    rua: objectDTO.rua,
                    obs: objectDTO.obs,
                    bairro: objectDTO.bairro,
                    cep: objectDTO.cep,
                    foto: objectDTO.foto,
                    ativo: objectDTO.ativo,
                });
                const clientsaved = yield client.save();
                return clientsaved;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static getClientById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const myclientByIdDTO = yield cliente_1.default.findById(id);
                return myclientByIdDTO;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static updateClient(id, objectDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //fazer o update
                const client = yield cliente_1.default.findByIdAndUpdate(id, objectDTO);
                if (client) {
                    const updateClient = yield cliente_1.default.findById(id);
                    return updateClient;
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
    //_id: id aqui ele ta dizendo que esta passando o proprio id que o mongogera
    static deleteClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientDeleted = yield cliente_1.default.findOneAndDelete({ _id: id });
                if (clientDeleted) {
                    return clientDeleted; // Type assertion
                }
                else {
                    return null;
                }
            }
            catch (err) {
                console.error(err);
                throw err;
            }
        });
    }
}
exports.ClientService = ClientService;
