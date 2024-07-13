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
const funcionario_controller_1 = require("../controller/funcionario_controller");
const authentication_1 = require("../middlewares/authentication");
const FuncionarioRouter = express_1.default.Router();
FuncionarioRouter.get("/funcionario", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allFunc = yield funcionario_controller_1.FuncionarioController.getAllFnc();
    if (allFunc) {
        res.status(200).send(allFunc);
    }
    else {
        res.sendStatus(404);
    }
}));
FuncionarioRouter.get("/funcionario/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const funcById = yield funcionario_controller_1.FuncionarioController.getFncById(id);
    if (funcById) {
        res.status(200).send(funcById);
    }
    else {
        res.sendStatus(404);
    }
}));
FuncionarioRouter.post("/funcionario", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const funcionarioDTO = req.body;
    const savedFnc = yield funcionario_controller_1.FuncionarioController.createFnc(funcionarioDTO);
    if (savedFnc) {
        res.status(201).send(savedFnc);
    }
    else {
        res.sendStatus(404);
    }
}));
FuncionarioRouter.put("/funcionario/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const funcionarioDTO = req.body;
    const updateFuncionario = yield funcionario_controller_1.FuncionarioController.updateFnc(id, funcionarioDTO);
    if (updateFuncionario) {
        res.status(200).send(updateFuncionario);
    }
    else {
        res.sendStatus(400);
    }
}));
FuncionarioRouter.delete("/funcionario/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const deletedFunc = yield funcionario_controller_1.FuncionarioController.deleteFnc(id);
    if (deletedFunc) {
        res.status(200).send(deletedFunc);
    }
    else {
        res.sendStatus(400);
    }
}));
exports.default = FuncionarioRouter;
