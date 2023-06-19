function livros() {
  var cards_livros = {

    card01: {
      imagem: "assets-python/img/img-livro-01.jpg",
      titulo: "Curso Intensivo de Python",
      descricao: "Uma introdução prática e baseada em projetos a programação",
      info:"Edição: Português <br> Autor: Eric Matthes",
      botao: "Visitar Site",
      link:'https://a.co/d/e6Dg4nQ',
    },

    card02: { 
      imagem: "assets-python/img/img-livro-02.jpg",
      titulo: "Automatize tarefas maçantes com Python",
      descricao: "Programação prática para verdadeiros iniciantes",
      info:"Edição: Português <br> Autor: Al Sweigart",
      botao: "Visitar Site",
      link:'https://a.co/d/9jOil09',
    },

    card03: { 
      imagem: "assets-python/img/img-livro-03.jpg",
      titulo: "Python Para Análise de Dados",
      descricao: "Tratamento de dados com Pandas, NumPy e IPython",
      info:"Edição: Português <br> Autor: Wes McKinney",
      botao: "Visitar Site",
      link:'https://a.co/d/9V4uja1',
    },

    card04: { 
      imagem: "assets-python/img/img-livro-04.jpg",
      titulo: "Programação Clara, Concisa e Eficaz",
      descricao: "Cursos Gratuitos",
      info:"Edição: Português <br> Autor: Luciano Ramalho",
      botao: "Visitar Site",
      link:'https://a.co/d/f8VZIbl',
    },

    card05: {
      imagem: "assets-python/img/img-livro-05.jpg",
      titulo: "Pense em Python",
      descricao: "Pense como um cientista da computação",
      info:"Edição: Português <br> Autor: Allen B. Downey",
      botao: "Visitar Site",
      link:'https://a.co/d/dn7BXgM',
    },

    card06: {
      imagem: "assets-python/img/img-livro-06.jpg",
      titulo: "Introdução à Programação com Python",
      descricao: "Algoritmos e Lógica de Programação Para Iniciantes",
      info:"Edição: Português <br> Autor: Nilo Ney Coutinho Menezes",
      botao: "Visitar Site",
      link:'https://a.co/d/cfIXLEL',
    },

    card07: {
      imagem: "assets-python/img/img-livro-07.jpg",
      titulo: "Web Scraping com Python",
      descricao: "Coletando mais dados da web moderna",
      info:"Edição: Português <br> Autor: Ryan Mitchell",
      botao: "Visitar Site",
      link:'https://a.co/d/fwxkrQ6',
    },

    card08: { 
      imagem: "assets-python/img/img-livro-08.jpg",
      titulo: "Aprendendo Python",
      descricao: "Linguagem Orientada a Objetos",
      info:"Edição: Português, <br> Autor: Mark Lutz",
      botao: "Visitar Site",
      link:'https://a.co/d/fYa1n6i',
    },

    card09: { 
      imagem: "assets-python/img/img-livro-09.jpg",
      titulo: "Mãos a obra: Aprendizado de máquina",
      descricao: "Conceitos, ferramentas e técnicas para a construção de sistemas inteligentes",
      info:"Edição: Português <br> Autor: Aurélien Géron",
      botao: "Visitar Site",
      link:'https://a.co/d/6KB6eOl',
    },

    card10: { 
      imagem: "assets-python/img/img-livro-10.jpg",
      titulo: "Desenvolvimento web com Flask",
      descricao: "Desenvolvendo aplicações web com Python",
      info:"Edição: Português <br> Autor: Miguel Grinberg",
      botao: "Visitar Site",
      link:'https://a.co/d/3Quluq1',
    },

    card11: {
      imagem: "assets-python/img/img-livro-11.jpg",
      titulo: "TDD com Python",
      descricao: "Test-Driven Development (Desenvolvimento Orientado a Testes) com Pytho",
      info:"Edição: Português <br> Autor: Harry J. W. Percival",
      botao: "Visitar Site",
      link:'https://a.co/d/0zoztlc',
    },

    card12: {
      imagem: "assets-python/img/img-livro-12.jpg",
      titulo: "Python 3: Conceitos e aplicações",
      descricao: "Aprendizado didático, com exemplos e exercícios práticos",
      info:"Edição: Português <br> Autor: Sérgio Luiz Banin",
      botao: "Visitar Site",
      link:'https://a.co/d/bW6zijp',
    },
  }

  var content = document.getElementById ("livros-conteudo");

  for (var card in cards_livros) {
    content.innerHTML +=
      '<div class="card-livro">' +
      '<div class="card-img-livro">' +
      '<img class="imagem" src="' +
      cards_livros[card].imagem +
      '"/>' +
      '</div>' +
      '<div class="card-body-livro">' +
      '<h3>' +
      cards_livros[card].titulo +
      '</h3>' +
      '<p>' +
      cards_livros[card].descricao +
      '</p>' +
      '<p>' +
      cards_livros[card].info +
      '</p>' +
      '<div class="card-btn-livro">' +
      '<button>' +
      '<a href="'+cards_livros[card].link+'" target="_blank">' +
      cards_livros[card].botao +
      '</a>' +
      '</div>' +
      '</div>' +
      '</div>'   
  }

};

livros()
