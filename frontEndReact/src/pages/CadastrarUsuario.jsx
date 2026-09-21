import { MdPerson } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import img_login from "../assets/img_login.svg"
import "./CadastrarUsuario.css"
function CadastrarUsuario({ onVoltar }){
    return(
        <div className="containerCadastrarUsuario">
        <img src={img_login} alt="Imagem login azul" className="imgCadastro" />
        <form className="formularioCadastro">
            <div className="inputCadastrarUsuario">
            <MdPerson className="iconViewCadastro" />
                <input type="text" name="nome" placeholder="Nome" />

            </div>
            <div className="inputCadastrarUsuario">
            <MdAlternateEmail className="iconViewCadastro" />
                <input type="email" name="email" placeholder="Email" />

            </div>
            <div className="inputCadastrarUsuario">
            <MdOutlinePassword className="iconViewCadastro" />
            <input type="password" name="password" placeholder="Senha" />


                </div>
            <div className="inputCadastrarUsuario">
            <MdOutlinePassword className="iconViewCadastro" />
            <input type="password" name="confirmarSenha" placeholder="Confirmar senha" />


                </div>
            <button type="button" className="botaoCadastro">Cadastrar</button>
            <IoArrowBackCircleSharp className="textoLink" onClick={onVoltar} aria-label="Já tem uma conta? Entrar" title="Já tem uma conta? Entrar" />
        </form>
        </div>
    )
}

export default CadastrarUsuario
