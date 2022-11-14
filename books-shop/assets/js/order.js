let confirm = document.querySelector(".submit-btn");
const validations = [false, false, false, false, false, false, true];

confirm.addEventListener("click", () => localStorage.clear());

function checkValidity() {
    if (validations.every(x => x)) {
        confirm.removeAttribute("disabled");
    } else {
        confirm.disabled = "disabled";
    }
}

const userName = document.getElementById('name');
const nameError = document.querySelector('.form__label_name > span.error');

userName.addEventListener('input', function (event) {
    if (userName.validity.valid) {
        validations[0] = true;
        nameError.textContent = '';
        nameError.className = 'error';
    } else {
        validations[0] = false;
        showNameError();
    }
    checkValidity();
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
        validations[1] = true;
        surnameError.textContent = '';
        surnameError.className = 'error';
    } else {
        validations[1] = false;
        showSurNameError();
    }
    checkValidity();
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
        validations[2] = true;
        dateError.textContent = '';
        dateError.className = 'error';
    } else {
        validations[2] = false;
        showDateError();
    }
    checkValidity();
});

function showDateError() {
    dateError.textContent = 'Delivery date should not be earlier tomorrow.';
    dateError.className = 'error active';
}

const userStreet = document.getElementById('street');
const streetError = document.querySelector('.form__label_street > span.error');

userStreet.addEventListener('input', function (event) {
    if (userStreet.validity.valid) {
        validations[3] = true;
        streetError.textContent = '';
        streetError.className = 'error';
    } else {
        validations[3] = false;
        showStreetError();
    }
    checkValidity();
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
        validations[4] = true;
        houseError.textContent = '';
        houseError.className = 'error';
    } else {
        validations[4] = false;
        showHouseError();
    }
    checkValidity();
});

function showHouseError() {
    houseError.textContent = 'Housenumber should be positive.';
    houseError.className = 'error active';
}

const userFlat = document.getElementById('flat');
const flatError = document.querySelector('.form__label_flat > span.error');

userFlat.addEventListener('input', function (event) {
    if (userFlat.validity.valid) {
        validations[5] = true;
        flatError.textContent = '';
        flatError.className = 'error';
    } else {
        validations[5] = false;
        showFlatError();
    }
    checkValidity();
});

function showFlatError() {
    if (userFlat.validity.valueMissing) {
        flatError.textContent = 'You need to enter a Flat.';
    } else if (userFlat.validity.patternMismatch) {
        flatError.textContent = 'Entered value needs to be positive numbers, minus/dash inside is possible.';
    }
    flatError.className = 'error active';
}


const userGifts = document.querySelectorAll('.form__input_checkbox');
const giftError = document.querySelector('#gifts > span.error');
console.log(Array.from(userGifts).filter(x => x.checked).length, 'length')
userGifts.forEach((gift) => {
    gift.addEventListener("input", function (event) {
        console.log(gift.checked, gift)
        console.log(Array.from(userGifts).filter(x => x.checked).length, 'length')
        if (Array.from(userGifts).filter(x => x.checked).length <= 2) {
            validations[6] = true;
            giftError.textContent = '';
            giftError.className = 'error';
        } else {
            console.log(">2")
            validations[6] = false;
            showGiftError();
        }
        checkValidity();
    });
});

function showGiftError() {
    giftError.textContent = 'You can choose no more than 2 gifts.';
    giftError.className = 'error active';
}