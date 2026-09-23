import { Request, Response} from "express";
import categoriaService from "../services/CategoriaService";
import { CadastrarCategoriaDTO } from "../models/dto/categoria/CadastrarCategoriaDTO";
import { AtualizarCategoriaDTO } from "../models/dto/categoria/AtualizarCategoriaDTO";
export async function listarCategorias(req: Request,res: Response){

    try{
        const categorias= await categoriaService.listarCategorias();
        res.status(200).json(categorias);
    }catch(error){
        console.error('Erro ao listar categorias:', error);
        res.status(500).json({ error: 'Erro ao listar categorias' });
    }


}

export async function criarCategoria(req:Request, res:Response) {

    try{
        const categoriaDTO:CadastrarCategoriaDTO = req.body;
        const novaCategoria= await categoriaService.criarCategoria(categoriaDTO);
        res.status(201).json({novaCategoria,mensagem:'Categoria criada com sucesso'});
    }catch(error){
        console.error('Erro ao criar categoria:', error);
        res.status(500).json({ error: 'Erro ao criar categoria' });
    }
}

export async function buscarCategoriaPorNome(req: Request, res: Response) {

        try{
            const nome= String(req.params.nome);
            const categoria= await categoriaService.buscarCategoriaPorNome(nome);
            res.status(200).json(categoria);
        }catch(error){
            console.error('Erro ao buscar categoria:', error);
            res.status(500).json({ error: 'Erro ao buscar categoria' });
        }

}

export async function atualizarCategoria(req: Request, res: Response) {
    try{
        const idCategoria = Number(req.params.id);
        const categoriaAtualizada: AtualizarCategoriaDTO = req.body;

        const categoriaAtualizadaNova = await categoriaService.atualizarCategoria(idCategoria, categoriaAtualizada);

        res.status(200).json({categoriaAtualizadaNova, mensagem: 'Categoria atualizada com sucesso'});
    }catch(error){
        console.error('Erro ao atualizar categoria:', error);
        res.status(404).json({ error: 'Erro ao atualizar categoria' });
    }
}

export async function deletarCategoria(req: Request, res: Response) {
    try{
        const idCategoria = Number(req.params.id);
        await categoriaService.deletarCategoria(idCategoria);
        res.status(200).json({ mensagem: 'Categoria deletada com sucesso' });
    }catch(error){
        console.error('Erro ao deletar categoria:', error);
        res.status(404).json({ error: 'Erro ao deletar categoria' });
    }
}


