import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import img_login from "../assets/img_login.svg"
import "./Login.css"
function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(e){
        e.preventDefault()
        if(email && password){
            alert("Seja bem vindo")
            navigate("/cadastrar")
        } else {
            alert("Preencha email e senha")
        }
    }

    return(
        <div className="telaLogin">
        <img src={img_login} alt="Imagem login azul" className="imgLogin" />
        <form className="formularioLogin" onSubmit={handleLogin}>
            <div className="inputLogin">
            <MdAlternateEmail className="iconViewLogin" />
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div className="inputLogin">
            <MdOutlinePassword className="iconViewLogin" />
            <input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />


                </div>
            <button type="submit" className="botaoLogin">Entrar</button>
            <span className="textoLink" onClick={() => navigate("/cadastrar")}>Cadastrar um novo usuário</span>
        </form>
        </div>
    )
}

export default Login