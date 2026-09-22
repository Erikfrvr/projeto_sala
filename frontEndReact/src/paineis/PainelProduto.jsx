function PainelProduto() {
return(
 <form>
    <h2>Produtos</h2>
    <div className="dadosProduto">
        <input type="text" placeholder="Nome do Produto" />
        <input type="text" placeholder="Descrição" id="descricao" />
        <input type="text" placeholder="Valor" id="valor" />
        <input type="date" name="data" id="data" />
        <select id="categoria">
            <option value="">Escolha uma categoria</option>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
            <option value="categoria3">Categoria 3</option>
            <option value="categoria4">Categoria 4</option>
        </select>
    </div>
    <button>Cadastrar</button>
 </form>
);

}
export default PainelProduto;