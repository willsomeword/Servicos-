import { loginService } from "../service/login_service";
import { loginSchema } from "../utils/types";

export class LoginController{
    static async login(loginDTO:loginSchema):Promise<loginSchema | null | undefined>{
        const logedData = await loginService.login(loginDTO);
        return logedData;
        
    }
}