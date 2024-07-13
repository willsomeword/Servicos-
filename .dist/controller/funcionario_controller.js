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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioController = void 0;
const funcionario_service_1 = require("../service/funcionario_service");
class FuncionarioController {
    static getAllFnc() {
        return __awaiter(this, void 0, void 0, function* () {
            const allData = yield funcionario_service_1.FuncionarioService.getAllFunc();
            return allData;
        });
    }
    static getFncById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield funcionario_service_1.FuncionarioService.getFuncById(id);
            return data;
        });
    }
    static createFnc(FuncionarioDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdData = yield funcionario_service_1.FuncionarioService.createFunc(FuncionarioDTO);
            return createdData;
        });
    }
    static updateFnc(id, FuncionarioDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateData = yield funcionario_service_1.FuncionarioService.updateFunc(id, FuncionarioDTO);
            return updateData;
        });
    }
    static deleteFnc(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedData = yield funcionario_service_1.FuncionarioService.deleteFun(id);
            return deletedData;
        });
    }
}
exports.FuncionarioController = FuncionarioController;
