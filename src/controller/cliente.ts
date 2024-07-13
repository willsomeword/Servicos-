import { ICliente } from "../model/cliente";
import { ClientService } from "../service/cliente";


export class Clientcontroller{
    static async getAllcli(): Promise < Array<ICliente> | undefined > {
        const AllData = await ClientService.getAllcliente();
        return AllData;
    }
    static async getClienteById(id: string): Promise<ICliente | null | undefined> {
        const clientByid: ICliente | null | undefined = await ClientService.getClientById(id);
        return  clientByid;
    }
    static async createCli(objectDTO : ICliente):Promise<ICliente | undefined>{
        const createClient = await ClientService. createClient(objectDTO);
        return createClient;
    }

    static async updateCli(id: string, objectDTO:ICliente):Promise<ICliente | null | undefined>{
        const updatedClient = await ClientService.updateClient(id, objectDTO);
        return updatedClient;
    }
    static async deleteCli(id: string):Promise<ICliente | null | undefined>{
        const deletedCli: ICliente | null | undefined = await ClientService.deleteClient(id);
        return deletedCli;
    }
   
  
}