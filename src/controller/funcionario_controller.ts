import { IFuncionario } from "../model/funcionario_model";
import { FuncionarioService } from "../service/funcionario_service";

export class FuncionarioController{
    static async getAllFnc(): Promise<Array<IFuncionario> | undefined>{
        const allData = await FuncionarioService.getAllFunc();
        return allData;
    }

    static async getFncById( id: string ): Promise<IFuncionario | null | undefined>{
        const data = await FuncionarioService.getFuncById(id);
        return data;
    }
    

    static async createFnc(
        FuncionarioDTO: IFuncionario
    ): Promise<IFuncionario | undefined>{
        const createdData = await FuncionarioService.createFunc(FuncionarioDTO);
        return createdData;
    }

    static async updateFnc( id: string, FuncionarioDTO: IFuncionario): Promise<IFuncionario | null | undefined>{
        const updateData = await FuncionarioService.updateFunc(id,FuncionarioDTO);
        return updateData;
    }

    static async deleteFnc(id:string): Promise<IFuncionario | null | undefined>{
        const deletedData = await FuncionarioService.deleteFun(id);
        return deletedData;
    }
}