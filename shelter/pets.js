"use strict"
let menu1 = document.querySelector('.menu__list__pets')
let pathname = document.location.pathname.split('/')
let pathname1 = document.location.hash.split('/')
for (let i = 0; i < menu1.children.length; i++) {
    for (let j = 0; j < menu1.children[i].children.length; j++) {
        let pathname2 = menu1.children[i].children[j].href.split('/')
        if (pathname2[pathname2.length - 1] == pathname[pathname.length - 1] || (pathname1[pathname1.length - 1]).includes(pathname2[pathname2.length - 1]) == true) (
            (menu1.children[i].children[j]).style = 'border-bottom: 2px solid #F1CDB3;'
        )
    }
}
for (let k = 0; k < menu1.children.length; k++) {
    for (let m = 0; m < menu1.children[k].children.length; m++) {
        menu1.children[k].children[m].addEventListener('click', function () {
            for (let i = 0; i < menu1.children.length; i++) {
                for (let j = 0; j < menu1.children[i].children.length; j++) {
                    menu1.children[i].children[j].style = 'border-bottom: none;'
                }
            }
            this.style = 'border-bottom: 2px solid #F1CDB3;'
        })
    }
}


let menuBtnPets = document.querySelector('.header__pets__menu-btn')
let menuBtnPets1 = document.querySelector('.header__pets__menu-btn1')
let menu = document.querySelector('.menu')

menuBtnPets.addEventListener('click', function () {
    menuBtnPets1.classList.toggle('active');
    menuBtnPets.classList.toggle('active');
    menu.classList.toggle('active');
})

menuBtnPets1.addEventListener('click', function () {
    menuBtnPets1.classList.toggle('active');
    menuBtnPets.classList.toggle('active');
    menu.classList.toggle('active');
})



let mas = [
    { name: 'Katrine', src: './svg/pets-katrine.svg', id: '1' },
    { name: 'Jennifer', src: './svg/pets-jennifer.svg', id: '2' },
    { name: 'Woody', src: './svg/pets-woody.svg', id: '3' },
    { name: 'Sophia', src: './svg/pets-sophia.svg', id: '4' },
    { name: 'Timmy', src: './svg/pets-timmy.svg', id: '5' }, 
    { name: 'Charly', src: './svg/pets-charly.svg', id: '6' },
    { name: 'Jek', src: './svg/pets-jek.svg', id: '7' }, 
    { name: 'Scarlet', src: './svg/pets-scarlet.svg', id: '8' },
    { name: 'Freddie', src: './svg/pets-freddie.svg', id: '9' },
    { name: 'Katrine', src: './svg/pets-katrine.svg', id: '1' },
    { name: 'Woody', src: './svg/pets-woody.svg', id: '2' },
    { name: 'Jennifer', src: './svg/pets-jennifer.svg', id: '3' },
    { name: 'Jek', src: './svg/pets-jek.svg', id: '4' },
    { name: 'Sophia', src: './svg/pets-sophia.svg', id: '5' },
    { name: 'Timmy', src: './svg/pets-timmy.svg', id: '6' },
    { name: 'Charly', src: './svg/pets-charly.svg', id: '7' },
    { name: 'Scarlet', src: './svg/pets-scarlet.svg', id: '8' },
    { name: 'Freddie', src: './svg/pets-freddie.svg', id: '9' }
]

let mas1 = []
let buttonDn = document.getElementById('buttonLeft');
let paigNumber = document.getElementById('paig_number');
let buttonUp = document.getElementById('buttonWrite');
let navigation = document.getElementById('our__navigation')
let sliderContent = document.querySelector('#our__slider');

let buttonDnDn = document.getElementById('buttonLeftLeft');
let buttonUpUp = document.getElementById('buttonWriteWrite');

let cardPets = document.createElement('div');
cardPets.className = 'our__card_pets';
cardPets.id = 'our__card_pets';
let cardPets1 = document.createElement('div');
cardPets1.className = 'card_pets1';
cardPets1.id = 'card_pets1';
sliderContent.appendChild(cardPets);

function thisWindowWidth() {
    let a = window.screen.availWidth;
    let b = window.innerWidth;
    if (a > b) {
        return b;
    }
    else if (a <= b) {
        return a;
    }
}

function getMasLength() {
    let b = thisWindowWidth();
    if (b > 860) {
        return 8
    }
    else if (b <= 860 && b > 510) {
        return 6
    }
    else if (b <= 510) {
        return 3
    }

}

function inputElement(a, i) {
    let div = document.createElement('div');
    div.className = 'our__card';
    div.id = mas[a].name;
    cardPets.appendChild(div);

    let img = document.createElement('img');
    img.className = 'pets_img';
    img.src = String(mas[a].src);
    img.alt = String(mas[a].name);
    cardPets.children[i].appendChild(img);

    let pPets = document.createElement('p');
    pPets.className = 'pets_card_title';
    pPets.textContent = String(mas[a].name);
    cardPets.children[i].appendChild(pPets);

    let buttonPets = document.createElement('button');
    buttonPets.className = 'button_primary';
    buttonPets.textContent = 'Learn more';
    cardPets.children[i].appendChild(buttonPets);
    return a, i;
}


function cliar(cardPets) {
    while (cardPets.children.length !== 0) {
        for (let int of cardPets.children) {
            if (int.classList == 'our__card') {
                int.remove();
            }
        }
    }
}

buttonDn.addEventListener('click', indexMines);
buttonUp.addEventListener('click', indexPlus);
buttonDnDn.addEventListener('click', indexMinesMines);
buttonUpUp.addEventListener('click', indexPlusPlus);

function indexMines() {
    paigNumber.textContent--;
    return init()
}

function indexPlus() {
    paigNumber.textContent++;
    return init()
}

function indexMinesMines() {
    paigNumber.textContent = 1;
    return init()
}

function indexPlusPlus() {
    Math.ceil(paigNumber.textContent = mas.length / getMasLength())
    return init1()
}



function init() {
    let lengthMas = getMasLength();
    let i = 0;

    if (paigNumber.textContent == 1 || paigNumber.textContent == '') {
        buttonDn.disabled = true;
        buttonDnDn.disabled = true;
        buttonDn.style = 'all: revert;width: 50px;height: 50px;border-radius: 50px;font-size: 20px;';
        buttonDnDn.style = 'all: revert;width: 50px;height: 50px;border-radius: 50px;font-size: 20px;';
    }
    else if (paigNumber.textContent > 1) {
        buttonDn.disabled = false
        buttonDnDn.disabled = false
        buttonDn.style = 'user-select: all;';
        buttonDnDn.style = 'user-select: all;';
    }
    if (paigNumber.textContent >= mas.length / lengthMas) {
        buttonUp.disabled = true
        buttonUpUp.disabled = true
        buttonUp.style = 'all: revert;width: 50px;height: 50px;border-radius: 50px;font-size: 20px;';
        buttonUpUp.style = 'all: revert;width: 50px;height: 50px;border-radius: 50px;font-size: 20px;';
    }
    else if (paigNumber.textContent < mas.length / lengthMas) {
        buttonUp.disabled = false
        buttonUpUp.disabled = false
        buttonUp.style = 'user-select: all;';
        buttonUpUp.style = 'user-select: all;';
    }

    if (paigNumber.textContent == '') {
        paigNumber.textContent = 1
    }

    cliar(document.querySelector('#our__card_pets'))
    mas1 = [];

    for (let a = lengthMas * paigNumber.textContent - lengthMas; a < lengthMas * paigNumber.textContent;) {

        if (mas[a] === undefined) {
            break;
        }
        else if (mas1.length < lengthMas) {
            mas1.push(mas[a]);
            for (i; i < mas1.length;) {
                inputElement(a, i)
                a++;
                i++;
            }
        }
        else if (mas1.length >= lengthMas) {
            for (i; i < mas1.length;) {
                inputElement(a, i)
                a++;
                i++;
            }
            break;
        }
    }
}

function init1() {
    let lengthMas = getMasLength();
    let i = 0;

    if (Math.ceil(paigNumber.textContent) == Math.ceil(mas.length / getMasLength())) {
        buttonDn.disabled = false
        buttonDnDn.disabled = false
        buttonDn.style = 'user-select: all;';
        buttonDnDn.style = 'user-select: all;';
        buttonUp.disabled = true
        buttonUpUp.disabled = true
        buttonUp.style = 'all: revert;width: 50px;height: 50px;border-radius: 50px;';
        buttonUpUp.style = 'all: revert;width: 50px;height: 50px;border-radius: 50px;';
    }


    cliar(document.querySelector('#our__card_pets'))
    mas1 = [];
    let a;
    if (mas.length % getMasLength() == 0) {
        a = getMasLength()
    }
    else if (mas.length % getMasLength() !== 0) {
        a = mas.length % getMasLength()
        a = mas.length - a
    }

    for (a; a < mas.length;) {
        if (mas[a] === undefined) {
            paigNumber.textContent = Math.ceil(paigNumber.textContent)
            break;
        }
        else if (mas1.length < lengthMas) {
            mas1.push(mas[a]);
            for (i; i < mas1.length;) {
                inputElement(a, i)
                a++;
                i++;
            }
        }
        else if (mas1.length >= lengthMas) {
            for (i; i < mas1.length;) {
                inputElement(a, i)
                a++;
                i++;
            }
            break;
        }
    }
    paigNumber.textContent = Math.ceil(paigNumber.textContent)
}
init()
