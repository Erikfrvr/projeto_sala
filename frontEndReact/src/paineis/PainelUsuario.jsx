import { useEffect, useState } from "react";
import "./PainelUsuario.css";

function PainelUsuario() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [usuarios, setUsuarios] = useState([]);

    async function carregarUsuarios() {
        try {
            const response = await fetch("http://localhost:3000/api/usuario");
            const data = await response.json();
            setUsuarios(data);
        } catch (error) {
            console.error("Erro ao carregar usuários:", error);
        }
    }

    useEffect(() => {
        carregarUsuarios();
    }, []);

    function handleAtualizar(e) {
        e.preventDefault();
        console.log({ nome, senha, email });
    }

    return (
        <div className="telaUsuario">
            <form className="painelUsuario" onSubmit={handleAtualizar}>
                <input type="text" name="nome" id="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="password" name="senha" id="senha" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Atualizar</button>
            </form>
            <table className="tabelaUsuario">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nome}</td>
                            <td>{usuario.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PainelUsuario;
