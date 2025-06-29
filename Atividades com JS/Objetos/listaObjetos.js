// 💤
// Lista de exercícios - Objetos

// 🟡
// 1. Catálogo de Produtos
// Crie um array com objetos representando produtos de uma loja. Implemente
// uma função que recebe um nome e retorna o produto correspondente.
const produtos = [
  { nome: 'Camiseta', preco: 29.90 },
  { nome: 'Calça', preco: 49.90 },
  { nome: 'Tênis', preco: 89.90 },
]

function buscarProduto(nome) {
  return produtos.find(produto => produto.nome === nome);
}

console.log (buscarProduto('Camiseta'))//nome do produto que deseja procurar

// 2. Sistema de Biblioteca
// Crie um objeto livro com título, autor e status de empréstimo. Implemente
// métodos emprestar() e devolver() que atualizam o status.
const livro = {
  titulo: 'O Senhor dos Anéis',
  autor: 'J.R.R. Tolkien',
  emprestado: false,

  emprestar() {
    if (this.emprestado) {
      console.log (`O livro "${this.titulo}" já está emprestado.`)
    }else{
      this.emprestado = true 
      console.log (`Você emprestou o livro "${this.titulo}.`)
    }
  },


  devolver() { 
    if (!this.emprestado) {
      console.log (`O livro "${this.titulo}" já está disponível.`)
    }else{
      this.emprestado = false 
      console.log (`Você devolveu o livro "${this.titulo}".`)
    }
  }
}

livro.emprestar()
livro.emprestar()
livro.devolver()
livro.devolver()

// 3. Conversor de Temperatura
// Crie um objeto com métodos celsiusParaFahrenheit e fahrenheitParaCelsius , que
// retornem os valores convertidos.

const conversorTemp = {
  celsiusParaFahrenheit(celsius){
    return (celsius * 9/5) + 32
  },

  fahrenheitParaCelsius (fahrenheit){ 
    return (fahrenheit - 32) * 5/9
  }
}

console.log (conversorTemp.celsiusParaFahrenheit(25) + " F°")
console.log (conversorTemp.fahrenheitParaCelsius(77) + " C°")

// 4. Agenda de Contatos
// Crie um objeto agenda que contenha uma lista de contatos. Implemente
// funções para adicionar, remover e listar contatos.

const agenda = {
  contatos: [{ nome: "Ana Paula", telefone: "(11) 98765-4321", email: "ana@email.com" },
    { nome: "Carlos Eduardo", telefone: "(21) 91234-5678", email: "carlos@email.com" }
  ],

  adicionar(contato) {
    this.contatos.push(contato)
    console.log (`COntato ${contato.nome} adicionado`)
  },

  remover(nome) {
    const index = this.contatos.findIndex(c => c.nome === nome)
    if (index !== -1){
      this.contatos.splice(index, 1)
      console.log (`Contato ${nome} removido.`)
    }else{
      console.log (`Contato ${nome} não encontrado.`)
    }
  },

  listar(){
    if (this.contatos.lenght === 0){
      console.log ("Agenda vazia.")
      return
    }else{
      console.log ("Lista de contatos")
      this.contatos.forEach ((contato, i) => {
        console.log(`${i + 1}. ${contato.nome} - Tel: ${contato.telefone} - Email: ${contato.email}`)
      })
    }
  }
}

agenda.listar()
agenda.adicionar({ nome: "Julia", telefone: "(31) 99999-9999" , email: "julia@gmail.com"})
agenda.remover("Ana Paula")
agenda.listar()

// 5. Relatório de Notas
// Crie um objeto aluno com notas em várias disciplinas. Implemente um método
// media() que retorna a média geral.

  const aluno = {
    nome: "Adjailson",
    notas: {
      matematica: 6,
      portugues: 8,
      historia: 9,
      ciencias: 4,
      ingles: 8
    },

    media() {
      const valores = Object.values(this.notas)
      const soma = valores.reduce ((total, nota) => total + nota, 0)
      const mediaFinal = soma/valores.length
      return mediaFinal
    },
  }

  console.log(`Média geral de ${aluno.nome}: ${aluno.media()}`)

// 6. Carrinho de Compras
// Implemente um objeto carrinho com um array de itens. Cada item tem nome,
// quantidade e valor. Crie métodos para adicionarItem , removerItem e total .

const carrinho = {
  itens: [],

  adicionarItem(item){
    const itemExiste = this.itens.find (i => i.nome === item.nome)
    if (itemExiste){
      itemExiste.quantidade += item.quantidade 
      console.log (`Quantidade do item ${item.nome} atualizada para ${itemExiste.quantidade}`)
    }else{
      this.itens.push(item)
      console.log (`Item ${item.nome} adicionado ao carrinho.`)
    }
  },

  removerItem(nome){
    const index = this.itens.findIndex (i => i.nome  === nome)
    if (index !== -1){
      console.log (`Item ${nome} removido do carrinho.`)
    }else{
      console.log (`Item ${nome} não encontrado.`)
    }
  },

  total(){
    const total = this.itens.reduce ((soma, item) => {
      return soma + (item.valor * item.quantidade)}, 0)
      return total
  },

  listarItens(){
    if (this.itens.lenght === 0 ){
      console.log ("Carrinho vazio.")
    }else{
      console.log ("Itens do carrinho: ")
      this.itens.forEach((item, i) =>{
        console.log (`${i + 1}. ${item.nome} | Qtnd: ${item.quantidade} | Valor: R$ ${item.valor}`)
      })
      console.log(`Total: R$ ${this.total()}`)
    }
  }
}

carrinho.adicionarItem({nome: "Pão", quantidade: 4, valor: 0.5})
carrinho.adicionarItem({nome: "Aipim", quantidade: 9, valor: 2})
carrinho.adicionarItem({nome: "Café", quantidade: 2, valor: 30})
carrinho.listarItens()
carrinho.removerItem("Pão")
carrinho.listarItens()



// 7. Filtrar Alunos Aprovados
// Dado um array de objetos alunos , filtre apenas os que têm média acima de 6 e
// retorne seus nomes.

const alunos = [
  {nome: "Ana", media: 7.5},
  {nome: "Julia", media: 8},
  {nome: "João", media: 5},
  {nome: "Clara", media: 4},
  {nome: "Paulo", media: 10}
]

const aprovados = alunos.filter (aluno => aluno.media > 6 ).map (aluno => aluno.nome)
console.log ("Alunos aprovados:" + aprovados)

// 8. Conversor de Moedas com Objeto
// Crie um objeto moeda com taxas de conversão e um método converter(valor, de,
// para) que retorna o valor convertido.

const moeda = {
  taxas: {
    BRL: 1,
    USD: 0.18,
    EUR: 0.17,
    BTC: 0.0000026 //peguei os valores do google usando o real brasileiro como base
  },

  converter(valor, de, para){
    if (!this.taxas[de] || !this.taxas[para]){
      console.log ("Moeda inválida")
      return null
    }

    const emReais = valor / this.taxas[de]
    const convertido = emReais * this.taxas[para]
    return convertido
  }
}

const valor = 100;
const de =  "BRL"
const para = "USD"

const valorConvertido = moeda.converter(valor, de, para) // coloca na ordem (valor, de(moeda que quer converter), para(a moeda que deseja saber o valor convertido))
console.log (`${de}: ${valor} = ${para}: ${valorConvertido}`)

// 🔴
// 1. Banco com Múltiplas Contas
// Crie um objeto banco com várias contas. Cada conta tem nome, saldo e
// métodos depositar , sacar . Implemente um relatório que mostre saldo total do
// banco.

const banco = {
  contas: [
    {nome: "Pedro", saldo: 1000,},
    {nome: "Clara", saldo: 1500,}
  ],

  depositar(nome, valor){
    const conta = this.contas.find (conta => conta.nome === nome)
    if(conta){
      conta.saldo += valor
      console.log (`${nome} depositou R$ ${valor}. Saldo atual: R4 ${conta.saldo}`)
    }else{
      console.log ("Conta não encontrada.")
    }
  },

  retirar(nome, valor){
    const conta = this.contas.find (conta => conta.nome === nome)
    if(conta && valor > conta.saldo){
      conta.saldo += valor
      console.log (`${nome} não possui saldo suficiente ${valor}.`)
    }else if (conta){
      conta.saldo -= valor
      console.log (`${nome} sacou R$: ${valor}. Valor restante: R$: ${conta.saldo}.`)
    }else{
      console.log ("Conta não encontrada.")
    }
  },

  relatorio(){
    let total = 0
    this.contas.forEach (conta => {
      console.log (`Conta: ${conta.nome}  | Saldo: R$ ${conta.saldo}`)
      total += conta.saldo
    })
    console.log (`Saldo total no banco: R$ ${total}`)
  }
}

banco.depositar ("Pedro", 500)
banco.retirar ("Clara", 1000)
banco.relatorio()

// 2. Sistema de Votação
// Crie um objeto que armazene votos por candidato. Implemente funções para
// votar e retornar o candidato mais votado.

// 3. Agenda Semanal de Compromissos
// Crie um objeto com os dias da semana como chaves e arrays de
// compromissos como valores. Implemente métodos para adicionar, remover e
// listar compromissos.

// 4. Gerador de Fichas de RPG
// Crie uma função que retorna objetos representando personagens com
// atributos aleatórios (força, destreza, vida). Permita criar múltiplos
// personagens e armazenar em um array.

// 5. Validador de Formulário com Objeto
// Crie uma função que recebe um objeto com campos ( nome , email , idade ) e
// valida cada campo com regras diferentes, retornando um objeto com
// mensagens de erro ou sucesso.

// 6. Sistema de Gestão de Projetos
// Crie uma estrutura com objetos projeto , cada um contendo nome, status e uma
// lista de tarefas . Cada tarefa tem nome, data e status. Implemente métodos para
// alterar status e listar tarefas por status.

// 7. Simulador de Jogo de Dados
// Crie um objeto jogoDeDados com métodos para rolar dois dados, registrar
// histórico e contar quantas vezes saiu um número específico.