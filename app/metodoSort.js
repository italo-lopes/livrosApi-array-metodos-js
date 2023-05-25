const botaoOrdenacaoPorPreco = document.getElementById('btnOrdenarPorPreco')
console.log(botaoOrdenacaoPorPreco)

botaoOrdenacaoPorPreco.addEventListener('click', ordenarPreco)

function ordenarPreco(){
    console.log("click")
    console.log("===== Por PREÇO sem desconto=============")
    let receberOrdenacao = livrosDescontos.sort((a,b) => {
        return a.preco - b.preco
        //return a.quantidade - b.quantidade

    })
    console.table(receberOrdenacao)
    criarTabeladeLivros(receberOrdenacao)
    
    console.log("===== Por Categoria=============")
    let receberOrdenacaoCategoria = livros.sort((a,b) => {
        if(a.categoria > b.categoria){
            return 1
        }
        if(a.categoria < b.categoria){
            return -1
        }
        return 0
    })
    console.table(receberOrdenacaoCategoria)
 
}
