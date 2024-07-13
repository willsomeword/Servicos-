import mongoose,{Document, Model, model} from "mongoose";
mongoose.set("debug",true);
//classe nao pode ser default apenas export 
//export->{}
//export default-> sem nada.


export interface IFuncionario extends Document {
    nome: string;
    email: string;
    senha: string;
    dataNascimento: Date;
    dataAdmissao?: Date;
    dataDemissao?: Date;
    obsDemissao?: Date;
    rua: string;
    bairro: string;
    cep: string;
    foto?: string;
    ativo?: string;
    salario: number;
    admin?:boolean;
}

const funcionarioSchema = new mongoose.Schema<IFuncionario>({
    nome: {type: String , required: true},
    email: {type: String , required: true},
    senha:{type:String , required:true},
    dataNascimento:{type: Date, required:true},
    dataAdmissao:{type: Date, required:false, default:Date.now},
    dataDemissao:{type: Date, required:false},
    obsDemissao:{type: String, required:false},
    rua:{type:String, required:true},
    bairro:{type:String, required:true},
    cep:{type:String, required:true},
    foto:{type: String, required:false},
    ativo:{type: String, required: false},
    salario:{ type: Number, required:true},
    admin:{type: Boolean, required:false, default: false},
},
{ versionKey: false}
);

const Funcionario: Model<IFuncionario> = mongoose.model<IFuncionario>(
    "funcionarios",
    funcionarioSchema
);

export default Funcionario;