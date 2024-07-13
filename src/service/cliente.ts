import Cliente, { ICliente } from "../model/cliente";
/*função esta dentro de um escopo geral , metdo esta dentro do escopo da classe*/

export class ClientService {
    static async getAllcliente(): Promise<Array<ICliente> | undefined> {
        try {
            const Allclients: Array<ICliente> = await Cliente.find({});
            return Allclients;
        } catch (err) {
            console.log(err);
        }
    }
    static async createClient(
        objectDTO: ICliente
        /*data transform object,  sempre que for trabalhar com banco fazer um try catch*/
    ): Promise<ICliente | undefined> {

        try {
            const client: ICliente = new Cliente({
                nome: objectDTO.nome,
                dataNascimento: objectDTO.dataNascimento,
                rua: objectDTO.rua,
                obs: objectDTO.obs,
                bairro: objectDTO.bairro,
                cep: objectDTO.cep,
                foto: objectDTO.foto,
                ativo: objectDTO.ativo,
            });
            const clientsaved = await client.save();
            return clientsaved;
        } catch (err) {
            console.log(err);
        }


    }
    static async getClientById(id: string): Promise<ICliente | null | undefined> {
        try {
            const myclientByIdDTO: ICliente | null = await Cliente.findById(id);
            return myclientByIdDTO;
        } catch (err) {
            console.log(err);
        }
    }

    static async updateClient(id: string, objectDTO: ICliente): Promise <ICliente | null | undefined>{
        try {
            //fazer o update
            const client = await Cliente.findByIdAndUpdate(id, objectDTO);
            if(client){
                const updateClient = await Cliente.findById(id);
                return updateClient;
            } else {
                return undefined;
            }
        } catch (error) {
            console.log(error);
        }
    }

    //_id: id aqui ele ta dizendo que esta passando o proprio id que o mongogera
    static async deleteClient(id: string): Promise<ICliente | null | undefined> {
        try {
            const clientDeleted = await Cliente.findOneAndDelete({ _id: id });
    
            if (clientDeleted) {
                return clientDeleted as unknown as ICliente; // Type assertion
            } else {
                return null;
            }
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    

    
}
