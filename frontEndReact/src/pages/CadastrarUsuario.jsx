import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import img_login from "../assets/img_login.svg"
import "./CadastrarUsuario.css"
function CadastrarUsuario(){
    const navigate = useNavigate()
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return(
        <div className="containerCadastrarUsuario">
        <img src={img_login} alt="Imagem login azul" className="imgCadastro" />
        <form className="formularioCadastro">
            <div className="inputCadastrarUsuario">
            <MdPerson className="iconViewCadastro" />
                <input type="text" name="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />

            </div>
            <div className="inputCadastrarUsuario">
            <MdAlternateEmail className="iconViewCadastro" />
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div className="inputCadastrarUsuario">
            <MdOutlinePassword className="iconViewCadastro" />
            <input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />


                </div>
            <div className="inputCadastrarUsuario">
            <MdOutlinePassword className="iconViewCadastro" />
            <input type="password" name="confirmarSenha" placeholder="Confirmar senha" />


                </div>
            <button type="button" className="botaoCadastro">Cadastrar</button>
            <div className="botaoVoltar" onClick={() => navigate("/")}>
                <IoArrowBackCircleSharp className="textoLink" />
                <span>Já tem uma conta? Entrar</span>
            </div>
        </form>
        </div>
    )
}

export default CadastrarUsuario
