import mongoose,{Document, Model, model} from "mongoose";
import Funcionario from "./funcionario_model";
import Cliente from "./cliente";


export interface IServico extends Document{
    nome:string;
    descricao?:string;
    valor:Number;
    tempoServico?:number;
    ativo: boolean;
    funcionario: typeof Funcionario | string;
    cliente: typeof Cliente | string;
    status: number; //0->agendado/ 1->em atendimento /2-> cancelado/finalizado
}

const servicoSchema = new mongoose.Schema<IServico>({
    nome:{type:String, required: true},
    descricao:{type: String, required: false},
    valor:{type:Number, required: true},
    tempoServico:{type:Number, required:false},
    ativo:{type:Boolean, required:true},
    funcionario:{type: mongoose.Types.ObjectId, ref:"funcionarios"},
    cliente:{type:mongoose.Types.ObjectId,ref:"clientes"},
    status: {type:Number, required:true},
},
{
    versionKey: false,
});
const Servico: Model<IServico> = mongoose.model<IServico>("servicos", servicoSchema);

export default Servico;