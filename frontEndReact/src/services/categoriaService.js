import api from "./api";

async function listarCategorias() {
    return await api("/api/categorias");
}

async function criarCategoria(nome) {
    return await api("/api/categorias", {
        method: "POST",
        body: JSON.stringify({ nome })
    });
}

async function atualizarCategoria(id, nome) {
    return await api(`/api/categorias/${id}`, {
        method: "PUT",
        body: JSON.stringify({ nome })
    });
}

async function deletarCategoria(id) {
    return await api(`/api/categorias/${id}`, {
        method: "DELETE"
    });
}

export default { listarCategorias, criarCategoria, atualizarCategoria, deletarCategoria };
