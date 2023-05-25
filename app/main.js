console.log("enTROU")
let livros = [];
let livrosDescontos = [];
const conteudoDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
function getApiAllantigo(){
    var api2 = fetch(conteudoDaAPI)
    .then(api2 => api2.json())
    .then(response => {
        console.log(response)
    })
    .catch(erro=>console.log(erro))
}


//getApiAllantigo()
// essa function é assincrona 
async function getApiAll(){
    var api = await fetch(conteudoDaAPI)
         //console.log(api)
         livros = await api.json();
         console.table(livros)
     livrosDescontos = implementarDesconto(livros)
     criarTabeladeLivros(livrosDescontos)
     //criarTabeladeLivros2(pegarApi)
}

getApiAll();
console.log(livros)
console.log("enTROU2")







// ====== SORT  TESTE =============================
let testeSort = [1,12,10,20,100,3,4,5,6,100000]
let testeSort2 = testeSort
let ordenarSort = testeSort.sort()
// ordenada de modo não estavel - erro , 
//necessario passar a comparação
console.table(ordenarSort)

let ordenarSortEstavio = testeSort2.sort((a,b)=> {
    return a-b
})

console.table(testeSort)
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
  ];
  console.table(items)
  items.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
  });
console.table(items)
