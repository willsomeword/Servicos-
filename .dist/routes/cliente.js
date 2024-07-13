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
const cliente_1 = require("../controller/cliente");
const authentication_1 = require("../middlewares/authentication");
const ClienteRouter = express_1.default.Router();
ClienteRouter.get("/cliente", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Allcli = yield cliente_1.Clientcontroller.getAllcli();
    if (Allcli) {
        res.status(200).send(Allcli);
    }
    else {
        res.sendStatus(404);
    }
}));
ClienteRouter.get("/cliente/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idFromUser = req.params.id;
    const clientByIdDTO = yield cliente_1.Clientcontroller.getClienteById(idFromUser);
    if (clientByIdDTO) {
        res.status(200).send(clientByIdDTO);
    }
    else {
        res.sendStatus(404);
    }
}));
/*em type ele cria uma referencia e nao uma constante*/
ClienteRouter.post("/cliente", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ClienteFromUser = req.body;
    const createdCliente = yield cliente_1.Clientcontroller.createCli(ClienteFromUser);
    if (createdCliente) {
        res.status(201).send(createdCliente);
    }
    else {
        res.sendStatus(400);
    }
}));
ClienteRouter.put("/cliente/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idFromUser = req.params.id;
    const clientDTO = req.body;
    const updatedClient = yield cliente_1.Clientcontroller.updateCli(idFromUser, clientDTO);
    if (updatedClient) {
        res.status(200).send(updatedClient);
    }
    else {
        res.sendStatus(400);
    }
}));
ClienteRouter.delete("/cliente/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idFromUser = req.params.id;
    const deleteClient = yield cliente_1.Clientcontroller.deleteCli(idFromUser);
    if (deleteClient) {
        res.status(200).send(deleteClient);
    }
    else {
        res.sendStatus(400);
    }
}));
exports.default = ClienteRouter;
