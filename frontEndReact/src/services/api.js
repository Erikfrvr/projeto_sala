const API_URL = "http://localhost:3000";
 
async function api(url, options = {}) {
 
    const response = await fetch(
        `${API_URL}${url}`,
        {
            headers: {
                "Content-Type": "application/json"
            },
            ...options
        }
    );
 
    if (!response.ok) {
        let mensagem = "Erro na requisição";
        try {
            const erro = await response.json();
            mensagem = erro.error || erro.message || mensagem;
        } catch (_) {
            // corpo da resposta não é JSON, mantém a mensagem genérica
        }
        throw new Error(mensagem);
    }
 
    return response.json();
}
 
export default api;