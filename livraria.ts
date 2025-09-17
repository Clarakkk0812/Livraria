interface ILivro {
   titulo: string;
   ano: number;
   isbn: string;
   preco: number;
   autor: string;
   editora: string;
   estoque: number;
   
   exibirDetalhes(): void;
   atualizar(estoque: number): void;
}

class Livro implements ILivro {
   titulo: string;
   ano: number;
   isbn: string;
   preco: number;
   autor: string;
   editora: string;
   estoque: number;
    
    constructor(titulo: string, ano: number, isbn: string, preco: number, autor: string, editora: string, estoque: number) {
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
    }

    exibirDetalhes(): void {
        console.log(`Dados do Livro:`);
        console.log(`${this.titulo} - ${this.autor} (${this.ano} - ${this.editora})`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Valor: ${this.preco} reais`);
        console.log(`Estoque: ${this.ano}`);
    }

    atualizar(estoque: number): void {
       this.estoque -= estoque;
       console.log(`A nova quantidade é de ${this.estoque} livros`);
    }
}

class Ebook implements ILivro {
   titulo: string;
   ano: number;
   isbn: string;
   preco: number;
   autor: string;
   editora: string;
   estoque: number;
   private formato: string;
   private tamanhoArquivoMB: number;
    
    constructor(titulo: string, ano: number, isbn: string, preco: number, autor: string, editora: string, estoque: number, tamanhoArquivoMB: number, formato: string) {
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
        this.tamanhoArquivoMB = tamanhoArquivoMB;
        this.formato = formato;
    }

    exibirDetalhes(): void {
        console.log(`Dados do Livro:`);
        console.log(`${this.titulo} - ${this.autor} (${this.ano} - ${this.editora})`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Valor: ${this.preco} reais`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`${this.formato} - ${this.tamanhoArquivoMB} MB`);
    }

    atualizar(estoque: number): void {
       this.estoque -= estoque;
       console.log(`A nova quantidade é de ${this.estoque} livros`);
    }
}

class GerenciaLivraria {

    private livros: Livro[] = [];

    adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
    console.log(`Livro ${livro.titulo} adicionado à livraria.`);
    }

    excluirLivro(isbn: string): void {
    this.livros = this.livros.filter(l => l.isbn !== isbn);
    console.log(`Livro com ISBN : ${isbn} foi excluído.`);
    }

    venderLivro(isbn: string): void {
    const livro = this.livros.find(l => l.isbn === isbn);
    if (livro && livro.estoque > 0) {
      livro.atualizar(-1);
      console.log(`Venda realizada: ${livro.titulo}`);
    } else {
      console.log("Livro indisponível no estoque.");
    }
    }
     
    listarLivros(): void {
    this.livros.forEach(l => l.exibirDetalhes());
    }
}

const livraria = new GerenciaLivraria();


const livro1 = new Livro("Dom Casmurro", 1899, "123456", 30, "Machado de Assis", "SARAIVA", 10);
const livro2 = new Livro("Perto do Coração Selvagem", 1977, "789012", 40, "Clarice Lispector", "ROCCO", 10);
const livro3 = new Livro("A hora da estrela", 1899, "345678", 36, "Clarice Lispector", "ROCCO", 10);
const livro4 = new Livro("A cinco passos de você", 2019, "908765", 50, "Rachael Lippincott", "GLOBO ALT", 10);
const ebook1 = new Ebook("O lado feio do amor", 2014, "156789", 10, "Colleen Hoover", "GALERA", 5, 15, "PDF");
const ebook2 = new Ebook("É assim que acaba", 2016, "781234", 10, "Colleen Hoover", "GALERA", 10, 10, "PDF");
const ebook3 = new Ebook("Dom Casmurro", 1899, "098990", 9, "Machado de Assis", " SARAIVA", 10, 10, "PDF");
const ebook4 = new Ebook("Perto do Coração Selvagem", 1943, "267890", 12, "Clarice Lispector", "ROCCO", 10, 15, "PDF");

livraria.adicionarLivro(livro1);
livraria.adicionarLivro(livro2);
livraria.adicionarLivro(livro3);
livraria.adicionarLivro(livro4);
livraria.adicionarLivro(ebook1);
livraria.adicionarLivro(ebook2);
livraria.adicionarLivro(ebook3);
livraria.adicionarLivro(ebook4);

livraria.venderLivro("345678");
livraria.venderLivro("123456");
livraria.venderLivro("267890");

livraria.excluirLivro("098990");

livraria.listarLivros();  