import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import img_login from "../assets/img_login.svg"
import "./Login.css"
function Login({ onCadastrar }){
    return(
        <div className="telaLogin">
        <img src={img_login} alt="Imagem login azul" className="imgLogin" />
        <div className="formularioLogin">
            <div className="inputLogin">
            <MdAlternateEmail className="iconViewLogin" />
                <input type="email" name="email" placeholder="Email" />

            </div>
            <div className="inputLogin">
            <MdOutlinePassword className="iconViewLogin" />
            <input type="password" name="password" placeholder="Senha" />


                </div>
            <button type="button" className="botaoLogin">Entrar</button>
            <span className="textoLink" onClick={onCadastrar}>Cadastrar um novo usuário</span>
        </div>
        </div>
    )
}

export default Login