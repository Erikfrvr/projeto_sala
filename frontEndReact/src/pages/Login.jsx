import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import imgLogin from "../assets/img_login.svg";
import "./Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navegation=useNavigate()

    function handleCadastrar(){
        navegation("/cadastrar")
    }

    async function handleLogin(e){
        e.preventDefault()
        if(!email || !password){
            alert("Preencha email e senha")
            return
        }
        try{
            const response = await fetch(`http://localhost:3000/api/usuario/${email}`)
            if(response.ok){
                const usuario = await response.json()
                if(usuario.senha === password){
                    navegation("/menu")
                } else {
                    alert("Senha incorreta")
                }
            } else {
                alert("Usuário não encontrado")
            }
        } catch(error){
            alert("Erro ao conectar com o servidor")
        }
    }

    return(
        <div className="containerLogin">
        <img src={imgLogin} alt="Imagem de Login azul" className="imgLogin" />
        <form className="formularioLogin" onSubmit={handleLogin}>
            <div className="inputLogin">
                 <MdAlternateEmail className="iconViewLogin" />
                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>

            <div className="inputLogin">
                 <RiLockPasswordLine className="iconViewLogin" />
                <input type="password" name="password" id="password" placeholder="Senha" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>


            <button type="submit" className="botaoLogin">Entrar</button>
        </form>

        <p onClick={handleCadastrar} className="textoLink">Cadastrar um novo usuario</p>
        </div>
    )
}


export default Login;
