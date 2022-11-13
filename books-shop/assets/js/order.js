let confirm = document.querySelector(".submit-btn");

confirm.addEventListener("click", () => localStorage.clear());

function checkValidity() {
    const errors = document.querySelectorAll(".error .active")
    if (errors.length === 0) {
        confirm.removeAttribute("disabled");
    }
}

const userName = document.getElementById('name');
const nameError = document.querySelector('.form__label_name > span.error');

userName.addEventListener('input', function (event) {
    if (userName.validity.valid) {
        nameError.textContent = '';
        nameError.className = 'error';
        checkValidity();
    } else {
        showNameError();
    }
});



function showNameError() {
    if (userName.validity.valueMissing) {
        nameError.textContent = 'You need to enter a Name.';
    } else if (userName.validity.tooShort) {
        nameError.textContent = `Name should be at least ${userName.minLength} characters; you entered ${userName.value.length}.`;
    } else if (userName.validity.patternMismatch) {
        nameError.textContent = 'Entered value needs to be letters without spaces.';
    }
    nameError.className = 'error active';
}

const userSurname = document.getElementById('surname');
const surnameError = document.querySelector('.form__label_surname > span.error');

userSurname.addEventListener('input', function (event) {
    if (userSurname.validity.valid) {
        surnameError.textContent = '';
        surnameError.className = 'error';
        checkValidity();
    } else {
        showSurNameError();
    }
});

function showSurNameError() {
    if (userSurname.validity.valueMissing) {
        surnameError.textContent = 'You need to enter a Surame.';
    } else if (userSurname.validity.tooShort) {
        surnameError.textContent = `Surame should be at least ${userSurname.minLength} characters; you entered ${userSurname.value.length}.`;
    } else if (userSurname.validity.patternMismatch) {
        surnameError.textContent = 'Entered value needs to be letters without spaces.';
    }
    surnameError.className = 'error active';
}

const userDate = document.getElementById('date');
const dateError = document.querySelector('.form__label_date > span.error');
const now = new Date();
const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();
let tomorrow = new Date(year, month, day + 1);

userDate.addEventListener('input', function (event) {
    if (new Date(userDate.value) >= tomorrow) {
        dateError.textContent = '';
        dateError.className = 'error';
        checkValidity();
    } else {
        showDateError();
    }
});

function showDateError() {
    dateError.textContent = 'Delivery date should not be earlier tomorrow.';
    dateError.className = 'error active';
}

const userStreet = document.getElementById('street');
const streetError = document.querySelector('.form__label_street > span.error');

userStreet.addEventListener('input', function (event) {
    if (userStreet.validity.valid) {
        streetError.textContent = '';
        streetError.className = 'error';
        checkValidity();
    } else {
        showStreetError();
    }
});

function showStreetError() {
    if (userStreet.validity.valueMissing) {
        streetError.textContent = 'You need to enter a Street.';
    } else if (userStreet.validity.tooShort) {
        streetError.textContent = `Street should be at least ${userSurname.minLength} characters; you entered ${userSurname.value.length}.`;
    } else if (userStreet.validity.patternMismatch) {
        streetError.textContent = 'Entered value needs to be letters, numbers and spaces inside.';
    }
    streetError.className = 'error active';
}

const userHouse = document.getElementById('house');
const houseError = document.querySelector('.form__label_house > span.error');

userHouse.addEventListener('input', function (event) {
    if (+userHouse.value > 0) {
        houseError.textContent = '';
        houseError.className = 'error';
        checkValidity();
    } else {
        showHouseError();
    }
});

function showHouseError() {
    houseError.textContent = 'Housenumber should be positive.';
    houseError.className = 'error active';
}

const userFlat = document.getElementById('flat');
const flatError = document.querySelector('.form__label_flat > span.error');

userFlat.addEventListener('input', function (event) {
    if (userFlat.validity.valid) {
        flatError.textContent = '';
        flatError.className = 'error';
        checkValidity();
    } else {
        showFlatError();
    }
});

function showFlatError() {
    if (userFlat.validity.valueMissing) {
        flatError.textContent = 'You need to enter a Flat.';
    } else if (userFlat.validity.patternMismatch) {
        flatError.textContent = 'Entered value needs to be positive numbers, minus/dash inside is possible.';
    }
    flatError.className = 'error active';
}

// form.addEventListener('submit', function (event) {
//     // Если поле email валдно, позволяем форме отправляться

//     if (!email.validity.valid) {
//         // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
//         showError();
//         // Затем предотвращаем стандартное событие отправки формы
//         event.preventDefault();
//     }
// });