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
exports.FuncionarioService = void 0;
const funcionario_model_1 = __importDefault(require("../model/funcionario_model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class FuncionarioService {
    static getAllFunc() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Allfunc = yield funcionario_model_1.default.find({});
                return Allfunc;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getFuncById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const funcFromById = yield funcionario_model_1.default.findById(id);
                return funcFromById;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static createFunc(FuncionarioDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const verifyingEmail = yield funcionario_model_1.default.findOne({
                    email: FuncionarioDTO.email,
                });
                if (verifyingEmail)
                    return undefined;
                const passHash = yield bcrypt_1.default.hash(FuncionarioDTO.senha, 10);
                const funcionarioEntity = new funcionario_model_1.default({
                    nome: FuncionarioDTO.nome,
                    email: FuncionarioDTO.email,
                    senha: passHash,
                    dataNascimento: FuncionarioDTO.dataNascimento,
                    dataAdmissao: FuncionarioDTO.dataAdmissao,
                    dataDemissao: FuncionarioDTO.dataDemissao,
                    obsDemissao: FuncionarioDTO.obsDemissao,
                    rua: FuncionarioDTO.rua,
                    bairro: FuncionarioDTO.bairro,
                    cep: FuncionarioDTO.cep,
                    foto: FuncionarioDTO.foto,
                    ativo: FuncionarioDTO.ativo,
                    salario: FuncionarioDTO.salario,
                    admin: FuncionarioDTO.admin,
                });
                return yield funcionarioEntity.save();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    //data transfer object é o que é passado para o servico e depois passado para o 
    // entity.
    ///essa camada ainda é enviada para camada maper.
    static updateFunc(id, funcionarioDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (funcionarioDTO.email) {
                    const verifyingEmail = yield funcionario_model_1.default.findOne({
                        email: funcionarioDTO.email,
                    });
                    if ((verifyingEmail === null || verifyingEmail === void 0 ? void 0 : verifyingEmail._id) != id) {
                        return undefined;
                    }
                }
                //!= sinal de diferente == sinal de igual . 
                if (funcionarioDTO.senha) {
                    const changingPass = yield bcrypt_1.default.hash(funcionarioDTO.senha, 10);
                    funcionarioDTO.senha = changingPass;
                }
                const updatingFunc = yield funcionario_model_1.default.findByIdAndUpdate(id, funcionarioDTO);
                if (updatingFunc) {
                    const updatedFunc = yield funcionario_model_1.default.findById(id);
                    return updatedFunc;
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
    static deleteFun(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const funcDeleted = yield funcionario_model_1.default.findOneAndDelete({ _id: id });
                if (funcDeleted) {
                    return funcDeleted; // Type assertion
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static detalharFuncionarioService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idDetalharFuncionario = yield funcionario_model_1.default.findById(id);
                if (idDetalharFuncionario && idDetalharFuncionario.senha) {
                    idDetalharFuncionario.senha = "";
                }
                return idDetalharFuncionario;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.FuncionarioService = FuncionarioService;
