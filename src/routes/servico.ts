import express, { Request, Response } from "express";
import { IServico } from "../model/servico_model";
import { ServicoController } from "../controller/service_controller";
import { authToken } from "../middlewares/authentication";



const ServicosRouter = express.Router();
ServicosRouter.get("/servico", authToken, async(req:Request, res:Response) =>{
    const alldata = await ServicoController.getallSvc();
    if (alldata){
        res.status(200).send(alldata);

    } else{
        res.sendStatus(404);
    }
});

ServicosRouter.get("/servico/:id",authToken, async(req:Request, res:Response)=>{
    const id =req.params.id;
    const dataById = await ServicoController.getSvcById(id);
    if(dataById){
        res.status(200).send(dataById);
    } else {
        res.sendStatus(404);
    }
})

ServicosRouter.post("/servico", authToken, async(req:Request, res:Response)=>{
    const serviceDTO: IServico = req.body;
    const serviceCreated = await ServicoController.createServico(serviceDTO);
    if(serviceCreated){
        res.status(201).send(serviceCreated);
    }else{
        res.sendStatus(404);
    }
});

ServicosRouter.put("/servico/:id", authToken, async(req:Request, res:Response)=>{
    const id = req.params.id;
    const serviceDto: IServico = req.body;

    const updateData = await ServicoController.updateSvc(id, serviceDto);
    if (updateData){
        res.status(200).send(updateData);
    } else{
        res.sendStatus(400);
    }
});

ServicosRouter.delete("/servico/:id", authToken, async(req:Request, res:Response)=>{
    const id = req.params.id;
    const deletedData = await ServicoController.deleteSvc(id);
    if (deletedData) {
        res.status(200).send(deletedData);
        
    } else {
        res.sendStatus(400);
        
    }
});




export default ServicosRouter;