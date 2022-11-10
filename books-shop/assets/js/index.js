const books = [{
  "author": "Douglas Crockford",
  "imageLink": "./assets/images/TheGoodParts.webp",
  "title": "JavaScript: The Good Parts",
  "price": 30,
  "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
},
{
  "author": "David Herman",
  "imageLink": "./assets/images/EffectiveJavaScript68.webp",
  "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "price": 22,
  "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You�ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
},
{
  "author": "David Flanagan",
  "imageLink": "./assets/images/TheDefinitiveGuide.webp",
  "title": "JavaScript: The Definitive Guide",
  "price": 40,
  "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
},
{
  "author": " Eric Elliott",
  "imageLink": "./assets/images/ProgrammingJavaScriptApplications.webp",
  "title": "Programming JavaScript Applications",
  "price": 19,
  "description": "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that�s easier�yes, easier�to work with as your code base grows."
},
{
  "author": "Addy Osmani",
  "imageLink": "./assets/images/LearningJavaScriptDesignPatterns.webp",
  "title": "Learning JavaScript Design Patterns",
  "price": 32,
  "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
},
{
  "author": "Boris Cherny",
  "imageLink": "./assets/images/ProgrammingTypeScript.webp",
  "title": "Programming TypeScript",
  "price": 28,
  "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That�s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
},
{
  "author": "Alex Banks, Eve Porcello",
  "imageLink": "./assets/images/LearningReact2nd.webp",
  "title": "Learning React, 2nd Edition",
  "price": 25,
  "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
},
{
  "author": "Bradley Meck Alex Young and Mike Cantelon",
  "imageLink": "./assets/images/NodeInAction.webp",
  "title": "Node.js in Action",
  "price": 38,
  "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
},
{
  "author": "Kyle Simpson",
  "imageLink": "./assets/images/YouDontKnowGetStarted.webp",
  "title": "You Don't Know JS Yet: Get Started",
  "price": 26,
  "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
},
{
  "author": "John Resig and Bear Bibeault",
  "imageLink": "./assets/images/SecretsOfTheJavaScriptNinja.webp",
  "title": "Secrets of the JavaScript Ninja",
  "price": 33,
  "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
}
];

let booksInBag;
if (localStorage.booksInBag === undefined) {
  booksInBag = [];
} else {
  booksInBag = JSON.parse(localStorage.booksInBag);
  if (booksInBag.length > 0) document.querySelector(".nav__bag").innerHTML = `(${booksInBag.length})`;
}

let bagPrice;
if (localStorage.bagPrice === undefined) {
  bagPrice = 0;
} else {
  bagPrice = JSON.parse(localStorage.bagPrice);
}


function deleteCurrentField(list) {
  list.replaceChildren();
}

function createSection() {

  const main = document.querySelector(".main");
  const sec = document.createElement('section');
  sec.classList.add('catalog');
  main.appendChild(sec);
  const div = document.createElement('div');
  div.classList.add('catalog__container');
  div.classList.add('container');
  document.querySelector(".catalog").appendChild(div);
  const h = document.createElement('h2');
  h.innerHTML = "BOOK CATALOG";
  h.classList.add('catalog__title');
  h.classList.add('section-title');
  document.querySelector(".catalog__container").appendChild(h);

}

function createItem(book, index) {
  return `<li class="catalog__item card">
            <img class="card__picture" src=${book.imageLink}
                alt=${book.title}>
            <article class="card__content">
                <p class="card__author">${book.author}</p>
                <h3 class="card__title">${book.title}</h3>
                <p class="card__price">Price: <span class="price">${book.price}</span></p>
                <div class="card__buttons">
                    <button class="btn card__button show-btn" data-index=${index}>Show more</button>
                    <button class="btn card__button add-btn" data-index=${index}>Add to bag</button>
                </div>
                <button class="btn card__button delete-btn" data-index=${index}>X</button>
            </article>
        </li>`
}

function createList(books) {
  const container = document.querySelector(".catalog__container");
  container.insertAdjacentHTML(
    'beforeend',
    `<ul class="catalog__list"></ul>`);
  const ul = document.querySelector(".catalog__list");
  for (let i = 0; i < books.length; i++) {
    let item = createItem(books[i], i);
    ul.insertAdjacentHTML('afterbegin', item);
  }

}


function createCatalog(books) {
  if (document.querySelector(".main").hasChildNodes()) deleteCurrentField(document.querySelector(".main"));
  createSection();
  createList(books);
}

createCatalog(books);

// Pop-up
let show = document.querySelectorAll(".show-btn"),
  backstage = document.querySelector('.black'),
  closeBtn = document.querySelector(".cls-btn"),
  modal = document.querySelector(".modal"),
  content = document.querySelector(".modal__content")

function closePopUp() {
  //  document.body.classList.remove('_lock')
  backstage.classList.remove('black_active')
  modal.classList.remove("modal__open")
  //  content.removeChild(content.children[0])
}

show.forEach(el => {
  el.addEventListener("click", function () {
    //   document.body.classList.toggle('_lock')
    modal.classList.toggle("modal__open")
    backstage.classList.toggle('black_active')
    content.querySelector(".card__title").innerHTML = books[el.dataset.index].title;
    content.querySelector(".modal__text").innerHTML = books[el.dataset.index].description;
    //  content.append(el.querySelector('.testimonials__content').cloneNode(true))
  })
})

closeBtn.addEventListener("click", closePopUp)
backstage.addEventListener("click", closePopUp)

/* Add to bag */
const add = document.querySelectorAll(".add-btn");
add.forEach(el => {
  el.addEventListener("click", function () {
    booksInBag.push(books[el.dataset.index]);
    console.log(booksInBag)
    document.querySelector(".nav__bag").innerHTML = `(${booksInBag.length})`;
    el.innerHTML = "In bag";
    bagPrice += books[el.dataset.price]
    localStorage.setItem('bagPrice', JSON.stringify(bagPrice));
    localStorage.setItem('booksInBag', JSON.stringify(booksInBag));
  })
})