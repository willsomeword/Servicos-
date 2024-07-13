import { IServico } from "../model/servico_model";
import { ServicoService } from "../service/servico_service";

export class ServicoController{
    static async getallSvc(): Promise<Array<IServico> | undefined>{
        const allData = await ServicoService.getAllService();
        return allData;
    }
    static async createServico(servicoDTO:IServico): Promise<IServico |undefined>{
        const createdData = await ServicoService.createService(servicoDTO);
        return createdData;
    }
    static async getSvcById(id:string):Promise<IServico | null | undefined>{

        const data = await ServicoService.getServiceById(id);
        return data;
    }
    static async updateSvc(id: string, serviceDTO: IServico):Promise<IServico | null | undefined>{
        const updateData = await ServicoService.updateService(id, serviceDTO);
         return updateData;
    }

    static async deleteSvc(id:string):Promise<IServico | null | undefined> {
        const deleteData = await ServicoService.deleteService(id);
        return deleteData;
    }
}