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

//desestrutura o array sendo possivel acessar aos atributos dos objetos
const [{id, nome, autor, categoria, paginas, recomenda, leu}] = livro


let resp = prompt("Deseja encontrar um livro por categoria?(S/N)")


// seleciona se o usuario deseja fazer uma busca por categoria
if (resp.toLocaleUpperCase() === "S"){
	selecionarCategoria()
}else if (resp.toLocaleUpperCase() === "N"){
	
	const aviso = document.createElement('H3')
	aviso.innerHTML = 'Estes sao todos os livros disponiveis:'
	let container = document.getElementById("BookList")
	container.appendChild(aviso)

	//exibe todos os livros ordenados de maneira crescente pelo numero de paginas
	const livrosOrdenados = livro.sort((a,b)=>a.paginas - b.paginas)
	criarTabela(livrosOrdenados)
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

	criarTabela(escolha)

}

function criarTabela(array){
	let container = document.getElementById("BookList")
	let table = document.createElement('table')
	let cabecalho = document.createElement('thead')

	//Criaçao do cabecalho da tabela
	let tr = cabecalho.insertRow()
	let th
	for(let i = 0; i < 7; i++){
		switch(i){
		case 0:
			th = tr.insertCell(i).outerHTML = "<th>Id</th>"
			break;
		case 1:
			th = tr.insertCell(i).outerHTML = "<th>Título</th>"
				break;	
		case 2:
			th = tr.insertCell(i).outerHTML = "<th>Autor</th>"
			break;	
		case 3:
			th = tr.insertCell(i).outerHTML = "<th>Categoria</th>"
			break;	
		case 4:
			th = tr.insertCell(i).outerHTML = "<th>Páginas</th>"
			break;	
		case 5:
			th = tr.insertCell(i).outerHTML = "<th>Recomnda</th>"
			break;	
		case 6:
			th = tr.insertCell(i).outerHTML = "<th>Leu</th>"
			break;					
		}
	}
	table.appendChild(tr)
	

	array.map(array=>{	
		tr = table.insertRow()
		for(let i = 0; i < 7; i++){
			 td = tr.insertCell()
			switch(i){
			case 0:
				td.appendChild(document.createTextNode(array.id))
				break;
			case 1:
				td.appendChild(document.createTextNode(array.nome))
				break;	
			case 2:
				td.appendChild(document.createTextNode(array.autor))
				break;	
			case 3:
				td.appendChild(document.createTextNode(array.categoria))
				break;	
			case 4:
				td.appendChild(document.createTextNode(array.paginas))
				break;	
			case 5:
				td.appendChild(document.createTextNode(array.recomenda))
				break;	
			case 6:
				td.appendChild(document.createTextNode(array.leu))
				break;					
			}

		}
	})
	container.appendChild(table)


}

