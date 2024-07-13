import Funcionario, { IFuncionario } from "../model/funcionario_model";

import bcrypt from "bcrypt";

export class FuncionarioService {
    static async getAllFunc(): Promise<IFuncionario[] | undefined> {
        try {
            const Allfunc: Array<IFuncionario> = await Funcionario.find({});
            //iterar para retirar a senha 
            Allfunc.forEach((item,index) =>{
                item.senha='';
            })
            return Allfunc;
        } catch (error) {
            console.log(error);
        }
    }

    static async getFuncById(
        id: string
    ): Promise<IFuncionario | null | undefined> {
        try {
            const funcFromById: IFuncionario | null = await Funcionario.findById(
                id
            );
            return funcFromById;
        } catch (error) {
            console.log(error);
        }

    }

    static async createFunc(
        FuncionarioDTO: IFuncionario
    ): Promise<IFuncionario | undefined> {
        try {
            const verifyingEmail = await Funcionario.findOne({
                email: FuncionarioDTO.email,

            });

            if (verifyingEmail) return undefined;


            const passHash = await bcrypt.hash(FuncionarioDTO.senha, 10);
            const funcionarioEntity = new Funcionario({
                nome: FuncionarioDTO.nome,
                email: FuncionarioDTO.email,
                senha: passHash,
                dataNascimento: FuncionarioDTO.dataNascimento,
                dataAdmissao: FuncionarioDTO.dataAdmissao,
                dataDemissao: FuncionarioDTO.dataDemissao,
                obsDemissao: FuncionarioDTO.obsDemissao,
                rua: FuncionarioDTO.rua,
                bairro: FuncionarioDTO.bairro,
                cep: FuncionarioDTO.cep,
                foto: FuncionarioDTO.foto,
                ativo: FuncionarioDTO.ativo,
                salario: FuncionarioDTO.salario,
                admin: FuncionarioDTO.admin,
            });
            return await funcionarioEntity.save();
        } catch (error) {
            console.log(error);

        }

        
    }


    //data transfer object é o que é passado para o servico e depois passado para o 
    // entity.
    ///essa camada ainda é enviada para camada maper.

    static async updateFunc(id: String, funcionarioDTO: IFuncionario): Promise<IFuncionario | null | undefined> {
        try {
            if (funcionarioDTO.email) {
                const verifyingEmail = await Funcionario.findOne({
                    email: funcionarioDTO.email,
                });
                if (verifyingEmail?._id != id) {
                    return undefined;

                }

            }
            //!= sinal de diferente == sinal de igual . 


            if (funcionarioDTO.senha) {
                const changingPass = await bcrypt.hash(funcionarioDTO.senha, 10);
                funcionarioDTO.senha = changingPass;
            }
            const updatingFunc = await Funcionario.findByIdAndUpdate(
                id,
                funcionarioDTO
            );
            if (updatingFunc) {
                const updatedFunc = await Funcionario.findById(id);
                return updatedFunc;
            } else {
                return undefined;
            }
        } catch (error) {
            console.log(error);
        }
    }


    static async deleteFun(
        id: string
    ): Promise<IFuncionario | null | undefined> {
        try {
            const funcDeleted = await Funcionario.findOneAndDelete({ _id: id });

            if (funcDeleted) {
                return funcDeleted as unknown as IFuncionario; // Type assertion
            } else {
                return null;
            }

        } catch (error) {
            console.log(error);
        }
    }

    static async detalharFuncionarioService( id: string):
    Promise<IFuncionario | null | undefined>{
        try {
            const idDetalharFuncionario:IFuncionario |null | undefined =
            await Funcionario.findById(id);
            if(idDetalharFuncionario && idDetalharFuncionario.senha){
                idDetalharFuncionario.senha = "";
            }

            return idDetalharFuncionario;
        } catch (error) {
            console.log(error);
            
        }
    }


}
