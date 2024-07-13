"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
//npm i jsonwebtoken e depois instalar  npm  i @typesjsonwebtoken --save-dev
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (id) => {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const dataToAssign = {
        id: id,
    };
    if (dataToAssign.id && jwtSecretKey) {
        const token = jsonwebtoken_1.default.sign(dataToAssign, jwtSecretKey);
        return token;
    }
    else {
        return undefined;
    }
};
exports.generateToken = generateToken;
