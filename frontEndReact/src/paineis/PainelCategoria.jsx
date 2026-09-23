import "./PainelCategoria.css";
import categoriaService from "../services/categoriaService";
import {useState,useEffect} from "react";
import { MdDelete, MdMode } from "react-icons/md";


function PainelCategoria() {

    const [nome, setNome] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [categoriaEditando, setCategoriaEditando] = useState(null);

    async function carregarCategoria(){
         try{
           const response = await categoriaService.listarCategorias()
           setCategorias(response)

         }catch(erro){
            console.error("Erro ao carregar categorias:", erro)
         }
    }

    useEffect(() => {
        carregarCategoria();
    }, []);

    function handleEditar(categoria){
        setCategoriaEditando(categoria);
        setNome(categoria.nome);
    }

    function handleCancelarEdicao(){
        setCategoriaEditando(null);
        setNome("");
    }

    async function handleExcluir(dados){
        if(!window.confirm(`Excluir a categoria "${dados.nome}"?`)){
            return;
        }

        try{
            await categoriaService.deletarCategoria(dados.id);
            if(categoriaEditando && categoriaEditando.id === dados.id){
                handleCancelarEdicao();
            }
            carregarCategoria();
        }catch(erro){
            alert(erro.message || "Erro ao excluir categoria");
        }
    }

    async function handleSalvar(e){
        e.preventDefault();
        if(!nome){
            alert("Preencha o nome da categoria");
            return;
        }

        try{
            if(categoriaEditando){
                await categoriaService.atualizarCategoria(categoriaEditando.id, nome);
            }else{
                await categoriaService.criarCategoria(nome);
            }
            setNome("");
            setCategoriaEditando(null);
            carregarCategoria();
        }catch(erro){
            alert(erro.message || "Erro ao salvar categoria");
        }
    }

    return (
        <div className="painel">

            <form className="formularioCategoria" onSubmit={handleSalvar}>

                <h2>Categorias</h2>

                <div className="dadosCategoria">
                    <input
                        type="text"
                        placeholder="Nome da categoria"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <button type="submit">
                        {categoriaEditando ? "Atualizar" : "Cadastrar"}
                    </button>

                    {categoriaEditando && (
                        <button type="button" className="botaoCancelar" onClick={handleCancelarEdicao}>
                            Cancelar
                        </button>
                    )}
                </div>

            </form>


            <div className="tabelaContainer">

                <table className="tabela">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {categorias.map((dados) => (
                            <tr key={dados.id}>
                                <td>{dados.id}</td>
                                <td>{dados.nome}</td>
                                <td className="acoesCategoria">
                                    <MdMode className="iconAcao iconAtualizar" title="Editar" onClick={() => handleEditar(dados)} />
                                    <MdDelete className="iconAcao iconExcluir" title="Excluir" onClick={() => handleExcluir(dados)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default PainelCategoria;
