
// Array de objetos com informações dos livros
var books = [
  {
    title: "HTML&CSS",
    author: "Jon Ducket",
    year: 2014,
    image: "assets-html-css/img/img_livro-01.jpg",
    link: "https://www.google.com/search?q=html+css+jon+duckett&rlz=1C1VDKB_pt-PTBR1005BR1005&sxsrf=APwXEdfZbPfqIkOyXqPZ1peoHAacbDdrnQ:1684119115165&source=lnms&tbm=shop&sa=X&ved=2ahUKEwi0q_nMqPb-AhUArpUCHSxWA6MQ_AUoAXoECAIQAw&biw=1242&bih=561&dpr=1.1"
  },
  {
    title: "Fundamentos HTML5 CSS3",
    author: "Mauricio Samy",
    year: 2015,
    image: "assets-html-css/img/img_livro-02.jpg",
    link: "https://www.google.com/search?q=fundamentos+de+html5+e+css3&rlz=1C1VDKB_pt-PTBR1005BR1005&sxsrf=APwXEddZ1eFKU_9gUnqw9KfC1bf420rJOQ:1684119240737&source=lnms&tbm=shop&sa=X&ved=2ahUKEwia1OmIqfb-AhXUtJUCHUsGAhcQ_AUoAXoECAIQAw&biw=1242&bih=561&dpr=1.1"
  },
  {
    title: "HTML5",
    author: "Mark Pilgrim",
    year: 2010,
    image: "assets-html-css/img/img_livro-03.jpg",
    link: "https://www.google.com/search?q=html5+mark+pilgrim+shopping&rlz=1C1VDKB_pt-PTBR1005BR1005&sxsrf=APwXEdcRwDbA0hlTtKGvN-7j-Kuv9gmqnw%3A1684119342994&ei=Lp9hZNmYPObJ1sQP3PGJ2Ao&ved=0ahUKEwjZ58q5qfb-AhXmpJUCHdx4AqsQ4dUDCA8&uact=5&oq=html5+mark+pilgrim+shopping&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCEQoAEQCjIHCCEQoAEQCjIHCCEQoAEQCjIHCCEQoAEQCjoKCAAQRxDWBBCwAzoKCAAQigUQsAMQQzoFCAAQgAQ6BggAEBYQHjoFCCEQoAE6CAghEBYQHhAdSgQIQRgAUJ8VWIAgYIQhaAFwAXgAgAHTAYgBtAqSAQUwLjcuMZgBAKABAcgBCMABAQ&sclient=gws-wiz-serp"
  },
  {
    title: "Crie seu próprio site",
    author: "Nate Cooper",
    year: 2015,
    image: "assets-html-css/img/img_livro-04.jpg",
    link: "https://www.google.com/search?q=crie+seu+proprio+site&rlz=1C1VDKB_pt-PTBR1005BR1005&sxsrf=APwXEdcMfs4hiE9F5wLHwMJ-iPFIh5v9xQ:1684119436841&source=lnms&tbm=shop&sa=X&ved=2ahUKEwi69armqfb-AhUxK7kGHQ79CX8Q_AUoBHoECAEQBg&biw=1242&bih=561&dpr=1.1"
  },
  {
    title: "HTML e CSS",
    author: "Elisabeth Eric",
    year: 2015,
    image: "assets-html-css/img/img_livro-05.jpg",
    link: "https://www.google.com/search?q=html+css+elisabeth+robson&sa=X&rlz=1C1VDKB_pt-PTBR1005BR1005&biw=1242&bih=561&tbm=shop&sxsrf=APwXEdf5qtkL3TsW7eFAims6fCEPTXwYjA%3A1684119441484&ei=kZ9hZKb7HLbA5OUP4aWhiAU&ved=0ahUKEwjmh8boqfb-AhU2ILkGHeFSCFEQ4dUDCAg&uact=5&oq=html+css+elisabeth+robson&gs_lcp=Cgtwcm9kdWN0cy1jYxADOgoIABAYEIAEELADOgQIIxAnOgcIABCKBRBDOg0IABCKBRCxAxCDARBDOgsIABCABBCxAxCDAToECAAQAzoFCAAQgAQ6BwgAEIAEEAo6BggAEBYQHjoHCAAQGBCABDoFCCEQoAE6CAgAEBYQHhAYOgoIABAIEB4QDRAYOgcIIRCgARAKUOKUA1iOigRg5osEaAJwAHgAgAHsAYgB1h-SAQYwLjI2LjGYAQCgAQHIAQHAAQE&sclient=products-cc"
  },
  {
    title: "HTML5 e CSS3",
    author: "Elizabeth Castro",
    year: 2013,
    image: "assets-html-css/img/img_livro-06.jpg",
    link: "https://www.google.com/search?q=html+css+elisabeth+castro&sa=X&rlz=1C1VDKB_pt-PTBR1005BR1005&biw=1242&bih=561&tbm=shop&sxsrf=APwXEde42XoSct5kMdhDg7xw3-WKTkXRsQ%3A1684119512273&ei=2J9hZN2FEL-f5OUP1PGjGA&ved=0ahUKEwjd0aaKqvb-AhW_D7kGHdT4CAMQ4dUDCAg&uact=5&oq=html+css+elisabeth+castro&gs_lcp=Cgtwcm9kdWN0cy1jYxADMggIABAWEB4QGDoECCMQJzoFCAAQgAQ6BwgAEBgQgAQ6BggAEBYQHjoHCCEQoAEQCjoKCAAQCBAeEA0QGFDDBliFPmDWQGgBcAB4AIABzAGIAcEVkgEGMC4xOC4xmAEAoAEBwAEB&sclient=products-cc"
  }
];

// Função para criar os cards dos livros
function createBookCards() {
  var bookCardsContainer = document.getElementById("livro-imagens");

  // Iterar sobre o array de livros
  for (var i = 0; i < books.length; i++) {
    var book = books[i];

    // Criar um novo elemento de card
    var card = document.createElement("figure");
    card.className = "card";

    // Adicionar a imagem do livro
    var image = document.createElement("img");
    image.className = "img-livros";
    image.src = book.image;
    card.appendChild(image);

    // Adicionar o nome do livro
    var title = document.createElement("figcaption");
    title.textContent = book.title;
    card.appendChild(title);
    

    // Adicionar o autor do livro
    var author = document.createElement("p");
    author.className = "autor";
    author.textContent = "Autor: " + book.author;
    card.appendChild(author);

    // Adicionar o ano do livro
    var year = document.createElement("p");
    year.className = "ano-livro"
    year.textContent = "Ano: " + book.year;
    card.appendChild(year);

    // Adicionar o botão de acesso
    var button = document.createElement("button");
    button.className = "botao"
    button.textContent = "Pesquisar";
    button.addEventListener("click", function(link) {
      return function() {
        window.open(link, "_blank");
      };
    }(book.link));
    card.appendChild(button);

    // Adicionar o card ao container
    bookCardsContainer.appendChild(card);
  }
}

createBookCards();
