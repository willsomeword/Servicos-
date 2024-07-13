
import mongoose from "mongoose";

(async () =>{
    if(process.env.DB_URL){
        await mongoose.connect(process.env.DB_URL)
        .then(( res)=>{
            console.log("Mongodb atlas conectado");
        })
        .catch((err) =>{
            console.log("Error in db collection:", err.message);
        });
    }else{
        console.log("arquivo env nao configurado");
    }

})();

const db = mongoose.connection;

export default db;