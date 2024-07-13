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
exports.Clientcontroller = void 0;
const cliente_1 = require("../service/cliente");
class Clientcontroller {
    static getAllcli() {
        return __awaiter(this, void 0, void 0, function* () {
            const AllData = yield cliente_1.ClientService.getAllcliente();
            return AllData;
        });
    }
    static getClienteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientByid = yield cliente_1.ClientService.getClientById(id);
            return clientByid;
        });
    }
    static createCli(objectDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const createClient = yield cliente_1.ClientService.createClient(objectDTO);
            return createClient;
        });
    }
    static updateCli(id, objectDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedClient = yield cliente_1.ClientService.updateClient(id, objectDTO);
            return updatedClient;
        });
    }
    static deleteCli(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedCli = yield cliente_1.ClientService.deleteClient(id);
            return deletedCli;
        });
    }
}
exports.Clientcontroller = Clientcontroller;
