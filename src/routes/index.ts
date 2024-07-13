import express from 'express';
import { Express, Request, Response } from "express";
import clienteRouter from './cliente';
import FuncionarioRouter from './funcionario';
import ServicosRouter from './servico';
import loginRouter from './login';



 export const routes=(app:Express)=>{
 app.get("/",(req:Request, res:Response)=>{
    res.status(200).send({message:"api serviços"});

 });

 app.use(express.json(), clienteRouter, FuncionarioRouter, ServicosRouter,loginRouter);
};