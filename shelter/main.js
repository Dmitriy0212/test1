"use strict"
console.log(`
1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n
2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n
3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n
4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n
5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n
6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n
7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная
 полоса прокрутки, справа от отдельных блоков не появляются белые поля. 
 Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n
8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px
 верстка подстраивается под этот размер, элементы верстки меняют свои размеры и 
 расположение, не наезжают друг на друга, изображения могут менять размер, но с
 охраняют правильные пропорции: +8\n
 9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n
 10. Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8
Заключительный бал-100 по моим скромным критериям`)





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

let objJson = [
    {
        "name": "Jennifer",
        "src": "./shelter/svg/pets-jennifer.svg",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "1"
    },
    {
        "name": "Sophia",
        "src": "./shelter/svg/pets-sophia.svg",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
        ,
        "id": "2"
    },
    {
        "name": "Woody",
        "src": "./shelter/svg/pets-woody.svg",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"],
        "id": "3"
    },
    {
        "name": "Scarlett",
        "src": "./shelter/svg/pets-scarlet.svg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "4"
    },
    {
        "name": "Katrine",
        "src": "./shelter/svg/pets-katrine.svg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "5"
    },
    {
        "name": "Timmy",
        "src": "./shelter/svg/pets-timmy.svg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"],
        "id": "6"
    },
    {
        "name": "Freddie",
        "src": "./shelter/svg/pets-freddie.svg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "7"
    },
    {
        "name": "Charly",
        "src": "./shelter/svg/pets-charly.svg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"],
        "id": "8"
    }
]
let objJson1 = JSON.stringify(objJson);
let objJson2 = JSON.parse(objJson1)


let menuBtn = document.querySelector('.header__menu-btn')
let menuBtn1 = document.querySelector('.header__menu-btn1')
let menu = document.querySelector('.menu')
let menuList = document.querySelector('.menu__list')
let bodyScrol = document.querySelector('body')
let menuMain = document.querySelector('main')

menuBtn.addEventListener('click', function () {
    menuBtn1.classList.toggle('active');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    bodyScrol.classList.toggle('active');
    menuMain.classList.toggle('active');
})
menuBtn1.addEventListener('click', function () {
    bodyScrol.classList.toggle('active');
    menuBtn1.classList.toggle('active');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
function learnMore() {
    function delMod() {
        target.removeChild(divModWind)
    }
    let target = document.querySelector('.aur-friends');
    console.log(this.parentElement.id);
    let divModWind = document.createElement('div');
    divModWind.className = 'modal_window_with_button';
    target.appendChild(divModWind);
    let closeButton = document.createElement('button');
    closeButton.className = 'close_button';
    divModWind.appendChild(closeButton);
    closeButton.addEventListener('click', delMod)
    let divMod = document.createElement('div');
    divMod.className = 'modal_window';
    divModWind.appendChild(divMod);
    for(let i = 0;i<objJson2.length;i++){
        if(this.parentElement.id==objJson2[i].id){
            let img = document.createElement('img');
            img.className = 'modal_pet_img';
            img.src = String(objJson2[i].src);
            divMod.appendChild(img);
            img.alt = String(objJson2[i].name);
            let modalContent = document.createElement('div')
            modalContent.className = 'modal_content';
            divMod.appendChild(modalContent);
            let namePet = document.createElement('h3');
            namePet.textContent = String(objJson2[i].name);
            namePet.className = 'modal_pet_name'
            modalContent.appendChild(namePet);
            let typeEndBreed = document.createElement('h4');
            typeEndBreed.textContent = String(objJson2[i].type)+' - '+String(objJson2[i].breed);
            typeEndBreed.className = 'modal_pet_type';
            modalContent.appendChild(typeEndBreed);
            let descripTion = document.createElement('h5');
            descripTion.textContent = String(objJson2[i].description);
            descripTion.className = 'modal_description';
            modalContent.appendChild(descripTion);
            let listModal = document.createElement('ul');
            listModal.className = 'list_modal';
            modalContent.appendChild(listModal);
            let petAge = document.createElement('li');
            petAge.className = 'item_modal';
            petAge.innerHTML ='<b>'+'Age: '+'</b>'+String(objJson2[i].age);
            let petInoculations = document.createElement('li');
            petInoculations.className = 'item_modal';
            petInoculations.innerHTML ='<b>'+'Inoculations: '+'</b>'+String(objJson2[i].inoculations);
            let petDiseases = document.createElement('li');
            petDiseases.className = 'item_modal';
            petDiseases.innerHTML ='<b>'+'Diseases: '+'</b>'+String(objJson2[i].diseases);
            let petParasites = document.createElement('li');
            petParasites.className = 'item_modal';
            petParasites.innerHTML ='<b>'+'Parasites: '+'</b>'+String(objJson2[i].parasites);
            listModal.appendChild(petAge);
            listModal.appendChild(petInoculations);
            listModal.appendChild(petDiseases);
            listModal.appendChild(petParasites);
           
            break;
        }
    }
}


function createElementsSlider() {
    if (thisWindowWidth() < 768) {
        menu.style = `height: ${window.screen.availHeight}px;`

        for (let item of menuList.children) {
            item.addEventListener('click', function () {
                menuBtn1.classList.toggle('active');
                menuBtn.classList.toggle('active');
                menu.classList.toggle('active');
                bodyScrol.classList.toggle('active');
            })
        }
    }
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
            return 3
        }
        else if (b <= 860 && b > 510) {
            return 2
        }
        else if (b <= 510) {

            return 1
        }

    }

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
                mas1.push(objJson2[a]);
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
        div.id = mas1[a].id;
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
        buttonPets.addEventListener('click', learnMore)
        cardPets.children[i].appendChild(buttonPets);
        return a, i;
    }
    function indexMines() {
        a = 0;
        b = getMasLength();
        while (cardPets.firstChild) {
            cardPets.removeChild(cardPets.firstChild);
        }
        for (let i = 0; i < objJson2.length; i++) {
            if (mas1[0] === objJson2[i]) {
                for (let y = 0; y < mas1.length; y++) {
                    if (objJson2[i - 1] == undefined) {
                        mas1.splice(mas1.length - 1 - y, 1, objJson2[objJson2.length - 1 - y])
                    }
                    else if (objJson2[i - 1] !== undefined) {
                        if (objJson2[i - 2] !== undefined) {
                            if (objJson2[i - 3] !== undefined) {
                                mas1.splice(mas1.length - 1 - y, 1, objJson2[i - 1 - y])
                            }
                            else {
                                mas1.splice(mas1.length - 1 - y, 1, objJson2[i - 1 - y])
                                if (mas1[mas1.length - 1 - y] == undefined) {
                                    mas1.splice(mas1.length - 1 - y, 1, objJson2[objJson2.length - 1])
                                    init()
                                    return
                                }
                            }
                        }
                        else {
                            mas1.splice(mas1.length - 1 - y, 1, objJson2[i - 1 - y])
                            if (mas1[mas1.length - 1 - y] == undefined) {
                                for (let z = 0; z < objJson2.length; z++) {
                                    if (mas1[mas1.length - y] == objJson2[z]) {
                                        if (objJson2[z - 1] !== undefined) {
                                            mas1.splice(mas1.length - 1 - y, 1, objJson2[z - 1])
                                            if (y !== mas1.length - 1) {
                                                continue
                                            }
                                            else if (y == mas1.length - 1) {
                                                init()
                                                return
                                            }
                                        }
                                        else {
                                            mas1.splice(mas1.length - 1 - y, 1, objJson2[objJson2.length - 1])
                                            if (y !== mas1.length - 1) {
                                                continue
                                            }
                                            else if (y == mas1.length - 1) {
                                                init()
                                                return
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                init()
                return
            }
        }
    }

    function indexPlus() {
        a = 0;
        b = getMasLength();
        while (cardPets.firstChild) {
            cardPets.removeChild(cardPets.firstChild);
        }
        for (let i = 0; i < objJson2.length; i++) {
            if (mas1[mas1.length - 1] === objJson2[i]) {

                for (let y = 0; y < mas1.length; y++) {
                    if (objJson2[i + 1] == undefined) {
                        mas1.splice(y, 1, objJson2[i + 1 + y])
                        if (mas1[y] == undefined) {
                            for (let z = 0; z < objJson2.length; z++) {
                                if (mas1[y - 1] == objJson2[z]) {
                                    if (objJson2[z + 1] !== undefined) {
                                        mas1.splice(y, 1, objJson2[z + 1])
                                        if (y !== mas1.length - 1) {
                                            continue
                                        }
                                        else if (y == mas1.length - 1) {
                                            init()
                                            return
                                        }
                                    }
                                    else {
                                        mas1.splice(y, 1, objJson2[0])
                                        if (y !== mas1.length - 1) {
                                            continue
                                        }
                                        else if (y == mas1.length - 1) {
                                            init()
                                            return
                                        }
                                    }
                                }
                                else if (mas1[0] == undefined) {
                                    mas1.splice(y, 1, objJson2[0])
                                }
                            }
                        }
                    }
                    else if (objJson2[i + 1] !== undefined) {
                        if (objJson2[i + 2] !== undefined) {
                            if (objJson2[i + 3] !== undefined) {
                                mas1.splice(y, 1, objJson2[i + 1 + y])
                                if (y !== mas1.length - 1) {
                                    continue
                                }
                                else if (y == mas1.length - 1) {
                                    init()
                                    return
                                }
                            }
                            else {
                                mas1.splice(y, 1, objJson2[i + 1 + y])
                                if (mas1[y] == undefined) {
                                    for (let z = 0; z < objJson2.length; z++) {
                                        if (mas1[y - 1] == objJson2[z]) {
                                            if (objJson2[z + 1] !== undefined) {
                                                mas1.splice(mas1.length - 1 - y, 1, objJson2[z - 1])
                                                if (y !== mas1.length - 1) {
                                                    continue
                                                }
                                                else if (y == mas1.length - 1) {
                                                    init()
                                                    return
                                                }
                                            }
                                            else {
                                                mas1.splice(y, 1, objJson2[0])
                                                if (y !== mas1.length - 1) {
                                                    continue
                                                }
                                                else if (y == mas1.length - 1) {
                                                    init()
                                                    return
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            mas1.splice(y, 1, objJson2[i + 1 + y])
                            if (mas1[y] == undefined) {
                                for (let z = 0; z < objJson2.length; z++) {
                                    if (mas1[y - 1] == objJson2[z]) {
                                        if (objJson2[z + 1] !== undefined) {
                                            mas1.splice(y, 1, objJson2[z + 1])
                                            if (y !== mas1.length - 1) {
                                                continue
                                            }
                                            else if (y == mas1.length - 1) {
                                                init()
                                                return
                                            }
                                        }
                                        else {
                                            mas1.splice(y, 1, objJson2[0])
                                            if (y !== mas1.length - 1) {
                                                continue
                                            }
                                            else if (y == mas1.length - 1) {
                                                init()
                                                return
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                init()
                return
            }
        }
    }
}
