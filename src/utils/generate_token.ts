//npm i jsonwebtoken e depois instalar  npm  i @typesjsonwebtoken --save-dev
import jwt from "jsonwebtoken";

export const generateToken = (id:string): string |undefined =>{
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const dataToAssign = {
        id:id,
    };
    if(dataToAssign.id && jwtSecretKey){
        const token = jwt.sign(dataToAssign,jwtSecretKey);
        return token;
    }else{
        return undefined;
    }
};
