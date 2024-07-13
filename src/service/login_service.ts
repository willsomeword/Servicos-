import Funcionario from "../model/funcionario_model";
import { generateToken } from "../utils/generate_token";
import { loginSchema } from "../utils/types";
import bcrypt from "bcrypt";
export class loginService {





    static async login(loginDTO: loginSchema): Promise<loginSchema | undefined> {
        const funcLogin = await Funcionario.findOne({ email: loginDTO.email });
        if (funcLogin && loginDTO.senha) {
            const comparingPassword = await bcrypt.compare(loginDTO.senha, funcLogin.senha);

            if (comparingPassword) {
                const token = generateToken(funcLogin.id);
                if (token) {
                    const generatingReturnData: loginSchema = {
                        email: funcLogin.email,
                        token: token,
                    };
                    return generatingReturnData;

                }else{
                    return undefined;
                }


            } else {
                return undefined;
            }


        } else {
            return undefined;
        }
    }
}