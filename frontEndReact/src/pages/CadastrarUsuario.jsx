import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoChevronBackCircle } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CadastrarUsuario.css"

function CadastrarUsuario(){

    const navegation=useNavigate()

    function handleVoltar(){
        navegation("/")
    }

    const [nome,setNome]=useState("");
    const [email,setEmail]=useState("");
    const [senha,setSenha]=useState("");

    async function handleCadastrar(e){
        e.preventDefault()
        if(!nome || !email || !senha){
            alert("Preencha todos os campos")
            return
        }
        try {
            const response = await fetch("http://localhost:3000/api/usuario", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, email, senha })
            })
            if(response.ok){
                alert("Usuário cadastrado com sucesso")
                navegation("/")
            } else {
                const erro = await response.json()
                alert(erro.message || "Erro ao cadastrar usuário")
            }
        } catch (error) {
            alert("Erro ao conectar com o servidor")
        }
    }

    return(
        <div className="containerCadastrarUsuario">
            <form onSubmit={handleCadastrar}>
                <div className="inputCadastrarUsuario">
                    <MdDriveFileRenameOutline className="iconCadastrar" />

                    <input
                     type="text"
                     placeholder="Nome"
                     value={nome}
                     onChange={(v)=> setNome(v.target.value)
                     }
                     />
                </div>

                <div className="inputCadastrarUsuario">
                    <MdAlternateEmail  className="iconCadastrar" />
                    <input
                    type="email"
                     placeholder="Email"
                     value={email}
                     onChange={(e)=> setEmail(e.target.value)}
                     />
                </div>

                <div className="inputCadastrarUsuario">
                    <RiLockPasswordLine className="iconCadastrar"  />
                    <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e)=> setSenha(e.target.value)}
                    />
                </div>

                <div className="navegacaoCadastrarUsuario">
                    <IoChevronBackCircle className="voltar"  onClick={handleVoltar} />
                    <button type="submit">Cadastrar</button>
                </div>


            </form>


        </div>
    )

}


export default CadastrarUsuario;
