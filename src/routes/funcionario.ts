import express, { Request, Response } from "express";
import { FuncionarioController } from "../controller/funcionario_controller";
import { IFuncionario } from "../model/funcionario_model";
import { authToken } from "../middlewares/authentication";


const FuncionarioRouter = express.Router();


FuncionarioRouter.get("/funcionario", authToken,async(req: Request, res: Response) =>{
    const allFunc = await FuncionarioController.getAllFnc();
    if(allFunc){
        res.status(200).send(allFunc);
    } else{
        res.sendStatus(404);
    }
});

FuncionarioRouter.get("/funcionario/:id",authToken,async (req: Request, res: Response) =>{
    const id = req.params.id;
    const funcById = await FuncionarioController.getFncById(id);
    if(funcById){
    res.status(200).send(funcById);
    }else{
        res.sendStatus(404);
    }

});



FuncionarioRouter.post("/funcionario",authToken, async(req: Request, res: Response) =>{
    const funcionarioDTO: IFuncionario = req.body;

    const savedFnc = await FuncionarioController.createFnc(funcionarioDTO);
    if(savedFnc){
        res.status(201).send(savedFnc);
    } else{
        res.sendStatus(404);
        
    }
});


FuncionarioRouter.put("/funcionario/:id", authToken, async(req: Request, res: Response)=>{
    const id = req.params.id;
    const funcionarioDTO:IFuncionario = req.body;

    const updateFuncionario = await FuncionarioController.updateFnc(
        id,
        funcionarioDTO
    );
    if(updateFuncionario){
        res.status(200).send(updateFuncionario);

    }else{
        res.sendStatus(400);
    }
});

FuncionarioRouter.delete("/funcionario/:id", authToken, async(req:Request, res:Response)=>{
const id = req.params.id;
const deletedFunc = await FuncionarioController.deleteFnc(id);
if(deletedFunc){
    res.status(200).send(deletedFunc);
}else{
    res.sendStatus(400);
}
});

export default FuncionarioRouter;