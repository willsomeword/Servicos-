  import express from "express";
  import "dotenv/config";
  import { routes } from "./routes";
  import db from "./repository/db";
  import cors from "cors";


 // estabelecer a conexao
 db.on("error", () => console.log("error em estabelecer conexao"));
 db.once("open", () =>{
    console.log("conexao estabelecida com o banco");
 });
  // cria uma instancia  do express

  const app = express();


  //cors
  app.use(cors());
 // definindo a nossa 
  routes(app);
  app.listen(process.env.PORTA,() => {
    console.log("servidor rodando na port:"  + process.env.PORTA);
  });
  