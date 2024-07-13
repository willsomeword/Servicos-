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
exports.loginService = void 0;
const funcionario_model_1 = __importDefault(require("../model/funcionario_model"));
const generate_token_1 = require("../utils/generate_token");
const bcrypt_1 = __importDefault(require("bcrypt"));
class loginService {
    static login(loginDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const funcLogin = yield funcionario_model_1.default.findOne({ email: loginDTO.email });
            if (funcLogin && loginDTO.senha) {
                const comparingPassword = yield bcrypt_1.default.compare(loginDTO.senha, funcLogin.senha);
                if (comparingPassword) {
                    const token = (0, generate_token_1.generateToken)(funcLogin.id);
                    if (token) {
                        const generatingReturnData = {
                            email: funcLogin.email,
                            token: token,
                        };
                        return generatingReturnData;
                    }
                    else {
                        return undefined;
                    }
                }
                else {
                    return undefined;
                }
            }
            else {
                return undefined;
            }
        });
    }
}
exports.loginService = loginService;
