import { NextFunction, Request, Response } from "express"
import  Jwt  from "jsonwebtoken";

export const authToken = (req: Request, res: Response, next:NextFunction) =>{
  if(process.env.TOKEN_HEADER_KEY && process.env.JWT_SECRET_KEY){
    const token: string | undefined = req.headers[process.env.TOKEN_HEADER_KEY]?.toString();
    const secretKey = process.env.JWT_SECRET_KEY;

    if(token){
        Jwt.verify(token,secretKey,(err,infoId)=>{
            if(err){
                res.status(403).end();
            } 
            //correct token
            req.iduser = infoId;
            next();
            // o middle entra na requisição antes de entrar o core da aplicação a gente tem o middle que faz a meia e na autenticação verifica se o token esta ok.
        }); 
    } else{
      res.status(403).end();
    }
  }
}


//router e controller sao logica beuniess, onde o possivel apenas no service 