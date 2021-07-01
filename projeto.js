let resp = prompt("Deseja encontrar um livro por categoria?(S/N)")

class Livros{
	constructor(id, nome, autor, categoria, paginas, recomenda, leu){
		this.id = id
		this.nome = nome
		this.autor = autor
		this.categoria = categoria
		this.paginas = paginas
		this.recomenda = recomenda
		this.leu = leu
	}
}
const livro = Array(
	new Livros(6, 'Padroes JavaScript','Stoyan Stefanov', 'Tecnologia', 254, true, true),
	new Livros(1, "Digital Minimalism",`Cal Newport`, 'Estilo de vida', 254, false, false),
	new Livros(2, "O Genocídio do Negro Brasileiro",`Abdias do Nascimento`, 'História brasileira', 400, false, false),
	new Livros(3, "As veias abertas da América Latina",`Eduardo Galeano`, 'Américas', 412, false, false),
	new Livros(4, "Algoritmos para viver",`Brian Christian`, 'Tecnologia', 418, true, false),
	new Livros(5, "Thinking, fast and slow",`Daniel Kahneman`, 'Estilo de vida', 231, true, true)
)

//dessestrutura o array sendo possivel acessar aos atributos dos objetos
const [{id, nome, autor, categoria, paginas, recomenda, leu}] = livro


// seleciona se o usuario deseja fazer uma busca por categoria
if (resp.toLocaleUpperCase() === "S"){
	selecionarCategoria()
}else if (resp.toLocaleUpperCase() === "N"){
	//exibe todos os livros ordenados de maneira crescente pelo numero de paginas
	const livrosOrdenados = livro.sort((a,b)=>a.paginas - b.paginas)
	console.log('Estes sao todos os livros Disponiveis')
	console.table(livrosOrdenados)
}

// Busca as categorias existentes dentro do array para o ususario selecionar e exibe os livros da categoria selecionada
function selecionarCategoria(){
	let itensAtuais = []
	let i = 0
	livro.map((livro) =>{ 
		if(itensAtuais.indexOf(livro.categoria) === -1){
			itensAtuais[i] = livro.categoria
			i++
		}
	})

	resp = prompt(`Essas sao as categorias disponiveis

		${itensAtuais}

		Qual categoria deseja visualizar?`)

	const escolha = livro.filter(livro=>livro.categoria === resp)

	console.table(escolha)
}
function criarTabela(){

}
