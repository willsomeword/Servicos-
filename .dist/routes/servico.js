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
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("../controller/service_controller");
const authentication_1 = require("../middlewares/authentication");
const ServicosRouter = express_1.default.Router();
ServicosRouter.get("/servico", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const alldata = yield service_controller_1.ServicoController.getallSvc();
    if (alldata) {
        res.status(200).send(alldata);
    }
    else {
        res.sendStatus(404);
    }
}));
ServicosRouter.get("/servico/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const dataById = yield service_controller_1.ServicoController.getSvcById(id);
    if (dataById) {
        res.status(200).send(dataById);
    }
    else {
        res.sendStatus(404);
    }
}));
ServicosRouter.post("/servico", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceDTO = req.body;
    const serviceCreated = yield service_controller_1.ServicoController.createServico(serviceDTO);
    if (serviceCreated) {
        res.status(201).send(serviceCreated);
    }
    else {
        res.sendStatus(404);
    }
}));
ServicosRouter.put("/servico/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const serviceDto = req.body;
    const updateData = yield service_controller_1.ServicoController.updateSvc(id, serviceDto);
    if (updateData) {
        res.status(200).send(updateData);
    }
    else {
        res.sendStatus(400);
    }
}));
ServicosRouter.delete("/servico/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const deletedData = yield service_controller_1.ServicoController.deleteSvc(id);
    if (deletedData) {
        res.status(200).send(deletedData);
    }
    else {
        res.sendStatus(400);
    }
}));
exports.default = ServicosRouter;
