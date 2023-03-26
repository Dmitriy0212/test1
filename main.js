"use strict"
let menu1 = document.querySelector('.menu__list')
let pathname = document.location.pathname.split('/')
let pathname1 = document.location.hash.split('/')
for (let i = 0; i < menu1.children.length; i++) {
    for (let j = 0; j < menu1.children[i].children.length; j++) {
        let pathname2 = menu1.children[i].children[j].href.split('/')
        if (pathname2[pathname2.length - 1] == pathname[pathname.length - 1] || (pathname1[pathname1.length - 1]).includes(pathname2[pathname2.length - 1]) == true) (
            (menu1.children[i].children[j]).style = 'border-bottom: 3px solid #F1CDB3;'
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
            this.style = 'border-bottom: 3px solid #F1CDB3;'
        })
    }
}



let menuBtn = document.querySelector('.header__menu-btn')
let menuBtn1 = document.querySelector('.header__menu-btn1')
let menu = document.querySelector('.menu')
menuBtn.addEventListener('click', function () {
    menuBtn1.classList.toggle('active');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
menuBtn1.addEventListener('click', function () {
    menuBtn1.classList.toggle('active');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

function createElementsSlider() {
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
        if (b > 768) {
            return 3
        }
        else if (b <= 768 && b > 425) {
            return 2
        }
        else if (b <= 425) {
            return 1
        }

    }
    let mas = [
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
    let a = 0;
    let b = getMasLength();

    let buttonDn = document.getElementById('buttonLeft');
    let buttonUp = document.getElementById('buttonWrite');
    let sliderContent = document.querySelector('#slider');
    for (let int of sliderContent.children) {
        if (int.id == 'card_pets') {
            card_pets.remove();
        }
    }
    for (let int of sliderContent.children) {
        if (int.id == 'card_pets1') {
            card_pets1.remove();
        }
    }


    let cardPets = document.createElement('div');
    cardPets.className = 'card_pets';
    cardPets.id = 'card_pets';
    let cardPets1 = document.createElement('div');
    cardPets1.className = 'card_pets1';
    cardPets1.id = 'card_pets1';

    if (getMasLength() == 3 || getMasLength() == 2) {
        sliderContent.appendChild(buttonDn);
        sliderContent.appendChild(buttonUp);
        sliderContent.insertBefore(cardPets, sliderContent.lastElementChild);
        buttonDn.addEventListener('click', indexMines);
        buttonUp.addEventListener('click', indexPlus);
    }
    else if (getMasLength() == 1) {
        sliderContent.appendChild(cardPets);
        sliderContent.appendChild(cardPets1);
        for (let int of sliderContent.children) {
            if (int.id == 'buttonLeft' || int.id == 'buttonWrite') {
                if (int.id == 'buttonLeft') {
                    buttonLeft.remove();
                }
                else if (int.id == 'buttonWrite') {
                    buttonWrite.remove();
                }

            }
        }

        cardPets1.appendChild(buttonDn);
        cardPets1.appendChild(buttonUp);
        buttonDn.addEventListener('click', indexMines);
        buttonUp.addEventListener('click', indexPlus);


    }

    buttonDn.addEventListener('click', indexMines);
    buttonUp.addEventListener('click', indexPlus);

    function init() {
        let i = 0;
        for (a; a < getMasLength();) {
            if (mas1.length < getMasLength()) {
                mas1.push(mas[a]);
                for (i; i < mas1.length;) {
                    inputElement(a, i)
                    a++;
                    i++;
                }
            }
            else if (mas1.length >= getMasLength()) {
                for (i; i < mas1.length;) {
                    inputElement(a, i)
                    a++;
                    i++;
                }
                break;
            }
        }

    }

    init()

    function inputElement(a, i) {
        let div = document.createElement('div');
        div.className = 'card';
        div.id = mas1[a].name;
        cardPets.appendChild(div);

        let img = document.createElement('img');
        img.className = 'pets_img';
        img.src = String(mas1[a].src);
        img.alt = String(mas1[a].name);
        cardPets.children[i].appendChild(img);

        let pPets = document.createElement('p');
        pPets.className = 'pets_card_title';
        pPets.textContent = String(mas1[a].name);
        cardPets.children[i].appendChild(pPets);

        let buttonPets = document.createElement('button');
        buttonPets.className = 'button_primary';
        buttonPets.textContent = 'Learn more';
        cardPets.children[i].appendChild(buttonPets);
        return a, i;
    }

    function indexMines() {

        a = 0;
        b = getMasLength();
        while (cardPets.firstChild) {
            cardPets.removeChild(cardPets.firstChild);
        }
        for (a; a < b; a++) {
            let j = mas1[mas1.length - 1]
            if (mas1.length === 1) {
                for (let y = 0; y < mas.length; y++) {
                    if (mas1[0] == mas[y]) {
                        if (mas[y - 1] == undefined) {
                            mas1.pop();
                            mas1.splice(0, 0, mas[mas.length - 1])
                            init()
                            return
                        }
                    }
                }
                for (let i = 0; i < mas.length; i++) {
                    if (mas1[0] == mas[i]) {
                        mas1.pop();
                        mas1.splice(0, 0, mas[i - 1])
                        init()
                        return
                    }
                }
            }
            else if (mas1.length > 1) {
                mas1.pop();
                for (let y = 0; y < mas.length; y++) {
                    if (mas1[0] == mas[y]) {
                        if (mas[y - 1] == undefined) {
                            mas1.splice(0, 0, mas[mas.length - 1])
                            init()
                            return
                        }
                    }
                }
                for (let i = 0; i < mas.length; i++) {
                    if (mas1[0] == mas[i]) {
                        mas1.splice(0, 0, mas[i - 1])
                        init()
                        return
                    }
                }
            }

        }
    }

    function indexPlus() {

        a = 0;
        b = getMasLength();
        while (cardPets.firstChild) {
            cardPets.removeChild(cardPets.firstChild);
        }
        for (a; a < b; a++) {
            if (mas1.length === 1) {

                for (let i = 0; i < mas.length; i++) {
                    if (mas1[mas1.length - 1] == mas[i]) {
                        if (mas[i + 1] == undefined) {
                            mas1.shift();
                            mas1.splice(mas1.length, 0, mas[0])
                            init()
                            return
                        }
                        mas1.shift();
                        mas1.splice(mas1.length, 0, mas[i + 1])
                        init()
                        return
                    }
                }
            }
            else if (mas1.length > 1) {
                mas1.shift();
                for (let i = 0; i < mas.length; i++) {
                    if (mas1[mas1.length - 1] == mas[i]) {
                        if (mas[i + 1] == undefined) {
                            mas1.splice(mas1.length, 0, mas[0])
                            init()
                            return
                        }
                        mas1.splice(mas1.length, 0, mas[i + 1])
                        init()
                        return
                    }
                }
            }
        }
    }
}
