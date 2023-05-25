function pegarValorTotal(livrosFiltrados){
    console.log("======reduce======")
    console.table(livrosFiltrados)
    let totalValor = livrosFiltrados.reduce((acc,atual)=> acc + atual.preco, 0)
    console.log(totalValor)
    return totalValor
    //console.log(livrosFiltrados.reduce((acc,atual)=> acc + atual))
}