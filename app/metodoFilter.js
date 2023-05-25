// const btnFront = document.getElementById('btnFiltrarLivrosFront')
// const btnBack = document.getElementById('btnFiltrarLivrosBack')
// const btnDados = document.getElementById('btnFiltrarLivrosDados')

// btnFront.addEventListener('click', listarFront)
// btnBack.addEventListener('click', listarBack)
// btnDados.addEventListener('click', listarDados)


// function listarBack(){
//     let livrosFiltrados = livros.filter( element => {
//         return element.categoria == "back-end"
//     })
//     console.log(livrosFiltrados)
//     listaLivros.innerHTML= "";
//     criarTabeladeLivros(livrosFiltrados)
// }

// function listarDados(){
//     let livrosFiltrados = livros.filter( element => {
//         return element.categoria == "dados"
//     })
//     console.log(livrosFiltrados)
//     listaLivros.innerHTML= "";
//     criarTabeladeLivros(livrosFiltrados)
// }
//==========adiciona o evento dinamicamente a cada um deles=========
// botao.forEach(element =>{
//     element.addEventListener('click', (e) =>{
//         listarFront(e.target.value)
//     })
// })


//==========pegar todos os botao=========
const botao = document.querySelectorAll('.btn')
console.log(botao)

botao.forEach(element =>{
    element.addEventListener('click', listarFront)
})
// e.listarFront - this = evento
//==========faz o msm codiigo pra cada um =========
function listarFront(){
    const valorLivroElement = document.getElementById(this.id)
    const valor = valorLivroElement.value
    console.log(valor)
    if(!valor) return 
    //operação ternario 
    let livrosFiltrados = valor == "disponivel" 
    ? filterDisponibilidade() : filterCategoria(valor)  // usado o extrarir pra scopo global(+ legibilidade )
    console.log(livrosFiltrados)

    criarTabeladeLivros(livrosFiltrados)
    
    if(valor == "disponivel" ){
        const valorTotal = pegarValorTotal(livrosFiltrados)
       // console.log(valorTotal)
        exibirTabelaDeDisponivel(valorTotal);
    }

}

function filterCategoria(valor) {
    return livros.filter(element => {
        return element.categoria == valor
    })
}

function filterDisponibilidade() {
    return livros.filter(el => el.quantidade > 0)
}

