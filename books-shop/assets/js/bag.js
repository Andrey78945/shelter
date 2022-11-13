let booksInBag = JSON.parse(localStorage.booksInBag).filter(x => Boolean(x)) ?? [];
let bagPrice = JSON.parse(localStorage.bagPrice) ?? 0;
console.log(booksInBag)
console.log(typeof booksInBag)
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
    h.innerHTML = "ORDER BOOKS";
    h.classList.add('catalog__title');
    h.classList.add('section-title');
    document.querySelector(".catalog__container").appendChild(h);

}

function createItem(book, index) {
    return `<li class="catalog__item card" data-index=${index}>
            <img class="card__picture" src=${book.imageLink}
                alt=${book.title} data-index=${index}>
            <article class="card__content">
                <p class="card__author">${book.author}</p>
                <h3 class="card__title">${book.title}</h3>
                <p class="card__price">Price: $<span class="price">${book.price}</span></p>
                <button class="btn card__button delete-btn delete-btn-visible" data-index=${index}
                    title="Remove from bag">X</button>
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

function createConfirm() {
    let list = document.querySelector(".catalog__list")
    list.insertAdjacentHTML('afterend',
        `<p class="card__price total-card-price">Total: $<span class="price total-price">${bagPrice}</span></p>
        <a class="btn catalog__button confirm-btn" href="./order.html">Confirm order</a>`
    );
}


function createBag(books) {
    if (document.querySelector(".main").hasChildNodes()) deleteCurrentField(document.querySelector(".main"));
    createSection();
    if (booksInBag.length > 0) {
        createList(books);
        createConfirm();
    } else {
        document.querySelector(".section-title").innerHTML = "THERE IS NOT A BOOK IN THE BAG"
    }

}

createBag(booksInBag);

/* Remove from bag */
const add = document.querySelectorAll(".delete-btn");
add.forEach(el => {
    el.addEventListener("click", function () {
        bagPrice -= booksInBag[el.dataset.index].price;
        booksInBag.splice(el.dataset.index, 1);
        localStorage.setItem('bagPrice', JSON.stringify(bagPrice));
        localStorage.setItem('booksInBag', JSON.stringify(booksInBag));
        document.querySelectorAll(".card")[el.dataset.index].style.display = "none";
        if (bagPrice > 0) {
            document.querySelector(".total-price").innerHTML = bagPrice;
        } else {
            document.querySelector(".section-title").innerHTML = "THERE IS NOT A BOOK IN THE BAG"
            document.querySelector(".total-card-price").style.display = "none";
            document.querySelector(".confirm-btn").style.display = "none";
        }
    })
})