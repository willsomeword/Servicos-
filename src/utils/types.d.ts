export type loginSchema = {
    email: string;
    senha?: string;
    token?: string;
};


//type.d todas as estruturas montadas e typagem ficaria aqui

declare global{
    namespace Express{
        interface Request{
            iduser:Context;
        }
    }
}