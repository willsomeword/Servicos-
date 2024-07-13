import express, { Response, Request } from "express";
import { Clientcontroller } from "../controller/cliente";
import { ICliente } from "../model/cliente";
import { authToken } from "../middlewares/authentication";



const ClienteRouter = express.Router();


ClienteRouter.get("/cliente", authToken, async (req: Request, res: Response) => {
   const Allcli = await Clientcontroller.getAllcli();
   if (Allcli) {
      res.status(200).send(Allcli);

   } else {
      res.sendStatus(404);
   }

});





ClienteRouter.get("/cliente/:id", authToken, async (req: Request, res: Response) => {
   const idFromUser: string = req.params.id;
   const clientByIdDTO = await Clientcontroller.getClienteById(idFromUser);
   if(clientByIdDTO){
      res.status(200).send(clientByIdDTO);
   }else{
      res.sendStatus(404);
   }
});
/*em type ele cria uma referencia e nao uma constante*/


ClienteRouter.post("/cliente", authToken,async (req: Request, res: Response) => {
   const ClienteFromUser: ICliente = req.body;
   const createdCliente = await Clientcontroller.createCli
      (ClienteFromUser);

   if (createdCliente) {
      res.status(201).send(createdCliente);
   } else {
      res.sendStatus(400);
   }
});


ClienteRouter.put("/cliente/:id", authToken,async (req: Request, res: Response) => {
   const idFromUser: string = req.params.id;
   const clientDTO: ICliente = req.body;
   const updatedClient = await Clientcontroller.updateCli(idFromUser, clientDTO);

   if (updatedClient){
      res.status(200).send(updatedClient);
   }else{
      res.sendStatus(400);
   }
});



ClienteRouter.delete("/cliente/:id",async (req: Request, res: Response) => {
   const idFromUser: string = req.params.id;
   const deleteClient = await Clientcontroller.deleteCli(idFromUser);
   if(deleteClient){
      res.status(200).send(deleteClient);
   }else{
      res.sendStatus(400);
   }
});


export default ClienteRouter;

