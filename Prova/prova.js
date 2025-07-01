// 1. Filtro e transformação com ordenação (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie um novo array com as disciplinas que possuem mais de 7 caracteres, convertidas para letras
// maiúsculas e ordenadas.

const palavras = ["desenvolvimento", "web", "javascript", "lógica", "frontend"]

palavras.filter (a => a.length = 7).map(a => a.toUpperCase()).sort().forEach(a => console.log(a))

// 2. Média dos alunos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie um array com objetos contendo nome e notas. Retorne a um novo array com nome e a média

const alunos = [
    { nome: "Ana", notas: [8, 9, 10]},
    { nome: "Carlos", notas: [6, 7, 5]},
]

const alunosComMedia = alunos.map(aluno => {
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length
    return { nome: aluno.nome, media: media.toFixed(2) }
})
console.log(alunosComMedia)


// 3. Cálculo de estoque (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● A partir do array abaixo, calcule o saldo final do estoque:

const transacoes = [
    {tipo:"entrada", valor: 100},
    {tipo:"saída", valor: 60},
    {tipo:"entrada", valor: 50},
    {tipo:"saída", valor: 30}
]

const saldoEstoque = transacoes.reduce((saldo, transacao) => {
return transacao.tipo === "entrada" ? saldo + transacao.valor : saldo - transacao.valor}, 0)
    
console.log(`Saldo final do estoque: R$${saldoEstoque}`)

// 4. Aplicar desconto em produtos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie uma função que aplica 10% de desconto em produtos com valor > R$100.

const produtos = [
    {nome: "Cadeira", valor: 150},
    {nome: "Lápis", valor: 5}
]

function aplicarDesconto(produtos) {
    return produtos.map(produto => {
        if (produto.valor > 100) {
            return {...produto, valor: (produto.valor * 0.9)}
        }
        return produto
    })
}

console.log(aplicarDesconto(produtos))

// 5. Verificações de dados (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Verifique se algum usuário está logado e se todos estão logados:

const usuarios = [
    {nome: "Ana", logado: true},
    {nome: "Lucas", logado: false},
    {nome: "Beatriz", logado: true}
]

const algumLogado = usuarios.some(usuario => usuario.logado)
const todosLogados = usuarios.every(usuario => usuario.logado)

console.log(`Algum usuário está logado? ${algumLogado}`)
console.log(`Todos os usuários estão logados? ${todosLogados}`)

// 6. Função buscar produto (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie uma função que busca um produto pelo nome:

const produtos2 = [
    {nome: "Notebook", preco: 3000},
    {nome: "Mouse", preco: 50}
]

function buscarProduto(nome) {
    return produtos2.find(produto => produto.nome.toLowerCase() === nome.toLowerCase())
}

console.log(buscarProduto("notebook"))

// 7. Listar tarefas pendentes (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Filtre as tarefas não concluídas e liste com prefixo "Pendente: ...":

const tarefas = [
    { descricao: "Estudar JS", concluida: true },
    { descricao: "Fazer a prova", concluida: false },
    { descricao: "Enviar projeto", concluida: false },
]

const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida)
.map(tarefa => `Pendente: ${tarefa.descricao}`)

console.log(tarefasPendentes)