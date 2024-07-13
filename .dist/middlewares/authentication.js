"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authToken = (req, res, next) => {
    var _a;
    if (process.env.TOKEN_HEADER_KEY && process.env.JWT_SECRET_KEY) {
        const token = (_a = req.headers[process.env.TOKEN_HEADER_KEY]) === null || _a === void 0 ? void 0 : _a.toString();
        const secretKey = process.env.JWT_SECRET_KEY;
        if (token) {
            jsonwebtoken_1.default.verify(token, secretKey, (err, infoId) => {
                if (err) {
                    res.status(403).end();
                }
                //correct token
                req.iduser = infoId;
                next();
                // o middle entra na requisição antes de entrar o core da aplicação a gente tem o middle que faz a meia e na autenticação verifica se o token esta ok.
            });
        }
        else {
            res.status(403).end();
        }
    }
};
exports.authToken = authToken;
//router e controller sao logica beuniess, onde o possivel apenas no service 
