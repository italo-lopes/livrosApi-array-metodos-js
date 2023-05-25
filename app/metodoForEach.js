const listaLivros = document.getElementById('livros')
const valorTotaldeLivrosDisponivel = document.getElementById('valor_total_livros_disponiveis')


// CONFIGURAÇÃO USANDO O TEMPLATE STRING --> ES6- 2015 ` ${}`
// USANDO  - innerHTML -
function  criarTabeladeLivros(listarLivros){
    valorTotaldeLivrosDisponivel.innerHTML = ""
    listaLivros.innerHTML= "";
    listarLivros.forEach(element => {
        //console.log(listaLivros.innerHTML)
        //let verificarDisponibilidade = disponibilidadeLivro(element)
       //operador ternario condiçao se verdadeira ? faz isso caso nao : isso
        verificarDisponibilidade =  element.quantidade > 0 ?  "livro_imagens" : "livro_imagens indisponivel"
        listaLivros.innerHTML = listaLivros.innerHTML + `<div class="livro">
        <img class="${verificarDisponibilidade}" src="${element.imagem}" alt="${element.alt}" />
        <h2 class="livro__titulo">
        ${element.titulo}
        </h2>
        <p class="livro__descricao">${element.autor}</p>
        <p class="livro__preco" id="preco">R$ ${element.preco.toFixed(2)}</p>  
        <div class="tags">
          <span class="tag"> ${element.categoria}</span>
        </div>
      </div>`
    })
}



function exibirTabelaDeDisponivel(preco){
    // TEMPLATE STRING -> ES6-2015
    valorTotaldeLivrosDisponivel.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${preco.toFixed(3)}</span></p>
    </div>
    `
}





// ====================OUTRAS FORMAS MSM RESULTADO================================================
function disponibilidadeLivro(element) {
    if(element.quantidade > 0){
        return "livro_imagens"
    }else{
        return "livro_imagens indisponivel"
    }
}


//element.preco.toFixed(2) casas decimais

// CONFIGURAÇÃO USANDO O CREATElmente 
function  criarTabeladeLivros2(listarLivros){   
    listaLivros.innerHTML= "";
    listarLivros.forEach(element => {

        const livro = document.createElement('div');
        livro.classList.add('livro')
        
        const livroImagem = document.createElement('img');
        livroImagem.classList.add('livro__imagens')
        livroImagem.src= element.imagem
        livroImagem.alt = element.alt
       
        const livroTitulo = document.createElement('h2')
        livroTitulo.classList.add('livro__titulo')
        livroTitulo.innerText = element.titulo
        
        const livroDescricao  = document.createElement('p')
        livroDescricao.classList.add('livro__descricao')
        livroDescricao.innerText = element.autor

        const livroPreco  = document.createElement('p')
        livroPreco.classList.add('livro__preco')
        livroPreco.innerText = "R$ "+ element.preco

        const tags = document.createElement('div')
        tags.classList.add('tags')


        const spanTags = document.createElement('span')
        spanTags.classList.add('tag')
        spanTags.innerText = element.categoria
        tags.appendChild(spanTags)


            livro.appendChild(livroImagem)
            livro.appendChild(livroTitulo)
            livro.appendChild(livroDescricao)
            livro.appendChild(livroPreco)
            livro.appendChild(tags)

        listaLivros.appendChild(livro)


    })
    console.log(listaLivros)
}