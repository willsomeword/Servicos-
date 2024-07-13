import express,{Request, Response} from "express";
import { loginSchema } from "../utils/types";
import { LoginController } from "../controller/login_controller";
const loginRouter = express.Router();
//aplicação monolitica é tudo nela mesmo , tanto o core e auth

loginRouter.post("/login", async (req:Request, res:Response)=>{
   
    const loginDTO: loginSchema = req.body;
    console.log(loginDTO);

    const logedData = await LoginController.login(loginDTO);
    
    if(logedData){
        if(logedData.token)
        res.cookie("token",logedData.token,{
            httpOnly:true,
            secure:false,
            expires:new Date(Date.now() * 2000),
            maxAge:18000,
        })
        res.status(200).send(logedData);
    }else{
        res.sendStatus(400);
    }
});

export default loginRouter;