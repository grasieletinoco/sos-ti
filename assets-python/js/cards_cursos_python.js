//CURSOS GRATUITOS
function cursos_gratuitos() {
  var cards_cg = {

    card01: {
      imagem: "assets-python/img/img-curso-g-01.jpg",
      titulo: "FreeCodeCamp",
      descricao: "Cursos Gratuitos",
      botao: "Acessar Plataforma",
    },

    card02: { 
      imagem: "assets-python/img/img-curso-g-02.jpg",
      titulo: "Curso em Vídeo",
      descricao: "Cursos Gratuitos",
      botao: "Acessar Plataforma",
    },

    card03: { 
      imagem: "assets-python/img/img-curso-g-03.jpg",
      titulo: "Microsoft Learn",
      descricao: "Cursos Gratuitos",
      botao: "Acessar Plataforma",
    },

    card04: { 
      imagem: "assets-python/img/img-curso-g-04.jpg",
      titulo: "Devaria",
      descricao: "Cursos Gratuitos",
      botao: "Acessar Plataforma",
    },

    card05: {
      imagem: "assets-python/img/img-curso-g-05.jpg",
      titulo: "Fábrica de Gênios",
      descricao: "Cursos Gratuitos",
      botao: "Acessar Plataforma",
    },

    card06: {
      imagem: "assets-python/img/img-curso-g-06.jpg",
      titulo: "Eu Capacito",
      descricao: "Cursos Gratuitos",
      botao: "Acessar Plataforma",
    },
  }

  var content = document.getElementById ("card-cursos-gratuitos");

  for (var card in cards_cg) {
    content.innerHTML +=
      '<div class="card-cg">' +
      '<div class="card-img-cursos">' +
      '<img class="imagem" src="' +
      cards_cg[card].imagem +
      '"/>' +
      '</div>' +
      '<div class="card-body-cursos">' +
      '<h3>' +
      cards_cg[card].titulo +
      '</h3>' +
      '<p>' +
      cards_cg[card].descricao +
      '</p>' +
      '</div>' +
      '<div class="card-btn-cursos">' +
      '<button>' +
      '<a>' +
      cards_cg[card].botao +
      '</a>' +
      '</button>' +
      '</div>' +
      '</div>' +
      '</div>'
  }
};

cursos_gratuitos()



//CURSOS PAGOS
function cursos_pagos() {
  var cards_cp = {

    card01: {
      imagem: "assets-python/img/img-curso-p-01.jpg",
      titulo: "DIO",
      descricao: "Cursos Gratuitos/Pagos",
      botao: "Acessar Plataforma",
    },

    card02: { 
      imagem: "assets-python/img/img-curso-p-02.jpg",
      titulo: "Rocketseat",
      descricao: "Cursos Gratuitos/Pagos",
      botao: "Acessar Plataforma",
    },

    card03: { 
      imagem: "assets-python/img/img-curso-p-03.jpg",
      titulo: "DevMedia",
      descricao: "Cursos Gratuitos/Pagos",
      botao: "Acessar Plataforma",
    },

    card04: { 
      imagem: "assets-python/img/img-curso-p-04.jpg",
      titulo: "Alura",
      descricao: "Cursos Pagos",
      botao: "Acessar Plataforma",
    },

    card05: {
      imagem: "assets-python/img/img-curso-p-05.jpg",
      titulo: "Code Cademy",
      descricao: "Cursos Gratuitos/Pagos",
      botao: "Acessar Plataforma",
    },

    card06: {
      imagem: "assets-python/img/img-curso-p-06.jpg",
      titulo: "Cod3r",
      descricao: "Cursos Gratuitos/Pagos",
      botao: "Acessar Plataforma",
    },
  }

  var content = document.getElementById ("card-cursos-pagos");

  for (var card in cards_cp) {
    content.innerHTML +=
      '<div class="card-cg">' +
      '<div class="card-img-cursos">' +
      '<img class="imagem" src="' +
      cards_cp[card].imagem +
      '"/>' +
      '</div>' +
      '<div class="card-body-cursos">' +
      '<h3>' +
      cards_cp[card].titulo +
      '</h3>' +
      '<p>' +
      cards_cp[card].descricao +
      '</p>' +
      '</div>' +
      '<div class="card-btn-cursos">' +
      '<button>' +
      '<a>' +
      cards_cp[card].botao +
      '</a>' +
      '</button>' +
      '</div>' +
      '</div>' +
      '</div>'
  }
};

cursos_pagos()

