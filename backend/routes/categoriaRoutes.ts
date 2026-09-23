import { Router } from "express";
import { listarCategorias, criarCategoria, atualizarCategoria, deletarCategoria } from "../controllers/categoriaController";

const routerCategoria= new Router();

routerCategoria.get('/categorias', listarCategorias);
routerCategoria.post('/categorias', criarCategoria);
routerCategoria.put('/categorias/:id', atualizarCategoria);
routerCategoria.delete('/categorias/:id', deletarCategoria);

export default routerCategoria;