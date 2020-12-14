const carrinho = [
   '{"nome": "Borracha" , "preco": 3.45}',
   '{"nome": "Caderno", "preco": 13.90}',
   '{"nome": "Kit de Lapis", "preco": 41.22}',
   '{"nome": "Caneta", "preco": 7.50}'
]


//retornar um array apenas com os precos usando a funcao map()

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)


//trabalhando com filter


const produtos = [
   {nome: 'Notebook', preco: 2499, fragil: true},
   {nome: 'iPad Pro', preco: 4199, fragil: true},
   {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
   {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]


const teste = produtos.filter((e)=>{
   return e.fragil === true && e.preco> 100
})

console.log(teste)

//funcao reduce 

const alunos = [
   {nome: "Joao", nota: 7.3, bolsista: false},
   {nome: "Maria", nota: 9.2, bolsista: false},
   {nome: "Pedro", nota: 9.8, bolsista: false},
   {nome: "Ana", nota: 8.7, bolsista: true},
]

console.log(alunos.map(a =>a.nota))

const resultado1 = alunos.map(a => a.nota).reduce((acumulador,atual)=>{
   console.log(acumulador, atual)
   return acumulador + atual
})

console.log(resultado1)


//Analisar se todos os alunos sao bolsistas

console.log(alunos.map(e => e.bolsista))

const desafio1 = alunos.map(a => a.bolsista).reduce((acumulador,atual)=>{
   console.log(acumulador, atual)
   return acumulador && atual
})

console.log(`Todos os alunos sao bolsistas ? ${desafio1}`)

//Analisar se existe pelo menos um bolsista


const desafio2 = alunos.map(a => a.bolsista).reduce((acumulador,atual)=>{
   console.log(acumulador, atual)
   return acumulador || atual
})

console.log(`Pelo menos um aluno e bolsista ? ${desafio2}`)



