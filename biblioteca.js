const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, ano, genero, estoque = 1) {
        const livro = {
            nome: nome,
            autor: autor,
            ano: ano,
            genero: genero,
            vezesAlugado: 0,
            estoque: estoque,
            estoqueInicial: estoque
        };

        this.livros.push(livro);
    },

    mostrarLivros() {
        console.log("=== LISTA DE LIVROS ===");

        for (let i = 0; i < this.livros.length; i++) {
            const livro = this.livros[i];

            console.log(
                `${i + 1}. ${livro.nome} - ${livro.autor} (${livro.ano}) | ${livro.genero} | Alugado ${livro.vezesAlugado}x | Estoque: ${livro.estoque}`
            );
        }
    },

    mostrarTabela() {
        console.table(this.livros);
    },

    alugar(nome) {
        if (!nome) {
            console.log("Informe o nome do livro que deseja alugar.");
            return;
        }

        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];

            if (l.nome === nome) {
                if (l.estoque > 0) {
                    l.estoque--;
                    l.vezesAlugado++;

                    console.log(`O livro "${nome}" foi alugado com sucesso!`);
                } else {
                    console.log(`O livro "${nome}" está sem estoque, por favor escolha outro livro.`);
                }

                return;
            }
        }

        console.log(`O livro "${nome}" não existe na biblioteca.`);
    },

    devolver(nome) {
        if (!nome) {
            console.log("Informe o nome do livro que deseja devolver.");
            return;
        }

        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];

            if (l.nome === nome) {
                if (l.estoque < l.estoqueInicial) {
                    l.estoque++;
                    console.log(`O livro "${nome}" foi devolvido com sucesso!`);
                } else {
                    console.log(`O livro "${nome}" já está disponível na biblioteca.`);
                }

                return;
            }
        }

        
    console.log(`O livro "${nome}" não existe na biblioteca.`)
},
      
    removerLivro(nome){
        for (let i = 0; i < this.livros.length; i++){
            if(this.livros[i].nome.toLowerCase()===nome.toLowerCase()){
                const removido = this.livros[i]
                this.livros.splice(i,1);
                console.log("Livros removido",removido.nome);
                return;
                }}console.log("Livro não encontrado")
            }

    

}
// Adicionando livros
biblioteca.adicionarLivros(
    "ACOTAR",
    "Sara J.",
    2015,
    "Romance",
    2
);

biblioteca.adicionarLivros(
    "Era uma vez um coraçao partido",
    "Stephane G.",
    2022,
    "Fantasia e Romance"
   
);

biblioteca.adicionarLivros(
    "Quarto de despejo",
    "Maria Carolina",
    1994,
    "Literatura Brasileira",
    3
);

biblioteca.adicionarLivros(
    "pequeno Principe",
    "Antoine de Saint-Exupéry",
    1943,
    "Literatura Infantil",
    1
);

biblioteca.adicionarLivros(
    "A Balada do Felizes Para Nunca",
    "Stephane G",
    2015,
    "Fantasia",
    2
);

biblioteca.adicionarLivros(
    "Harry Potter e a Pedra Filosofal",
    "J.K. Rowling",
    1997,
    "Fantasia",
    2
);

biblioteca.adicionarLivros(
    "A Maldição do Verdadeiro Amor",
    "Stephane G",
    2017,
    "Fantasia",
    2
);

biblioteca.adicionarLivros(
    "Sem limites ao amor",
    "Stephane G",
    2020,
    "Fantasia",
    4
);

biblioteca.adicionarLivros(
    "As Aventuras de Gulliver",
    "Jonathan Swift",
    1726,
    "Aventura",
    1
);
    
    


// Aluga um livro
biblioteca.alugar("A Maldição do Verdadeiro Amor");

// Devolve o livro
biblioteca.devolver("A Maldição ddo Verdadeiro Amor");

biblioteca.removerLivro("Harry Potter e a Pedra Filosofal")