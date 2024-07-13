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
exports.ServicoController = void 0;
const servico_service_1 = require("../service/servico_service");
class ServicoController {
    static getallSvc() {
        return __awaiter(this, void 0, void 0, function* () {
            const allData = yield servico_service_1.ServicoService.getAllService();
            return allData;
        });
    }
    static createServico(servicoDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdData = yield servico_service_1.ServicoService.createService(servicoDTO);
            return createdData;
        });
    }
    static getSvcById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield servico_service_1.ServicoService.getServiceById(id);
            return data;
        });
    }
    static updateSvc(id, serviceDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateData = yield servico_service_1.ServicoService.updateService(id, serviceDTO);
            return updateData;
        });
    }
    static deleteSvc(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteData = yield servico_service_1.ServicoService.deleteService(id);
            return deleteData;
        });
    }
}
exports.ServicoController = ServicoController;
