import Servico, { IServico } from "../model/servico_model";
import Cliente from "../model/cliente";
import Funcionario from "../model/funcionario_model";



export class ServicoService {
    static async createService(
        serviceDTO: IServico
    ): Promise<IServico | undefined> {
        try {
            const foundFuncionario = await Funcionario.findById(
                serviceDTO.funcionario
            );

            if (foundFuncionario && foundFuncionario.senha) foundFuncionario.senha = "";

            
            const foundCliente = await Cliente.findById(serviceDTO.cliente);

            const serviceMapped = new Servico({
                nome: serviceDTO.nome,
                descricao: serviceDTO.descricao,
                valor: serviceDTO.valor,
                tempoServico: serviceDTO.tempoServico,
                ativo: serviceDTO.ativo,
                funcionario: foundFuncionario,
                cliente: foundCliente,
                status: serviceDTO.status,

            });
            const saveService = serviceMapped.save();
            return saveService;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAllService(): Promise<Array<IServico> | undefined> {
        try {
            const allDataService: Array<IServico> = await Servico.find({}).populate([{ path: "funcionario" }, { path: "cliente" },]);
            return allDataService;
        } catch (error) {
            console.log(error);

        }
    }

    static async getServiceById(id: string): Promise<IServico | null | undefined> {
        try {
            const dataById = await Servico.findById(id).populate([{ path: "funcionario" }, { path: "cliente" },]);
            return dataById;
        } catch (error) {
            console.log(error);
        }
    }

    static async updateService(id: string, servicoDTO: IServico): Promise<IServico | null | undefined> {
        try {
            const updatingServico = await Servico.findByIdAndUpdate(id, servicoDTO);

            if (updatingServico) {
                const updateData = await Servico.findById(id);
                return updateData;
            } else {
                return undefined;
            }
        } catch (error) {
            console.log(error);

        }

    }


    static async deleteService(id: string): Promise<IServico | null | undefined> {
        try {
            const deletingServico = await Servico.findOneAndDelete({ _id: id });
        

               
            if (deletingServico) {
                return deletingServico as unknown as IServico; // Type assertion
            } else {
                return null;
            }

        } catch (erro) {
            console.log(erro);
        }
    }
}