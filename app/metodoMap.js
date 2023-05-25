function implementarDesconto(livros) {

    const desconto = 0.5
    livrosAletrados = livros.map(element=>{
       
        return {...element, preco: element.preco - (element.preco * desconto)} 

        // pega o valor todo e aletera um unico elemento 
        // quando eu quero alterar apenas um valor 
    })
    console.table(livrosAletrados)
    return livrosAletrados
}