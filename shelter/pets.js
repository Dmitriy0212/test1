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
let bodyScrol = document.querySelector('body')
let menuList = document.querySelector('.menu__list__pets')
for (let item of menuList.children) {
    item.addEventListener('click', function () {
        menuBtnPets1.classList.toggle('active');
        menuBtnPets.classList.toggle('active');
        menu.classList.toggle('active');
    })
}

menuBtnPets.addEventListener('click', function () {
    menuBtnPets1.classList.toggle('active');
    menuBtnPets.classList.toggle('active');
    menu.classList.toggle('active');
    bodyScrol.classList.toggle('active');
})

menuBtnPets1.addEventListener('click', function () {
    menuBtnPets1.classList.toggle('active');
    menuBtnPets.classList.toggle('active');
    menu.classList.toggle('active');
    bodyScrol.classList.toggle('active');
})

function learnMore() {
    function delMod() {
        target.removeChild(divModWind)
    }
    let target = document.querySelector('.our-pets');
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

function thisWindowHeight() {
    if (thisWindowWidth() < 768) {
        menu.style = `height: ${window.screen.availHeight}px;`
    }
}

let objJson = [
    {
        "name": "Jennifer",
        "src": "./svg/pets-jennifer.svg",
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
        "src": "./svg/pets-sophia.svg",
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
        "src": "./svg/pets-woody.svg",
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
        "src": "./svg/pets-scarlet.svg",
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
        "src": "./svg/pets-katrine.svg",
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
        "src": "./svg/pets-timmy.svg",
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
        "src": "./svg/pets-freddie.svg",
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
        "src": "./svg/pets-charly.svg",
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
    div.id = objJson2[a].id;
    cardPets.appendChild(div);

    let img = document.createElement('img');
    img.className = 'pets_img';
    img.src = String(objJson2[a].src);
    img.alt = String(objJson2[a].name);
    cardPets.children[i].appendChild(img);

    let pPets = document.createElement('p');
    pPets.className = 'pets_card_title';
    pPets.textContent = String(objJson2[a].name);
    cardPets.children[i].appendChild(pPets);

    let buttonPets = document.createElement('button');
    buttonPets.className = 'button_primary';
    buttonPets.textContent = 'Learn more';
    buttonPets.addEventListener('click', learnMore)
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
    Math.ceil(paigNumber.textContent = objJson2.length / getMasLength())
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
    if (paigNumber.textContent >= objJson2.length / lengthMas) {
        buttonUp.disabled = true
        buttonUpUp.disabled = true
        buttonUp.style = 'all: revert;width: 50px;height: 50px;border-radius: 50px;font-size: 20px;';
        buttonUpUp.style = 'all: revert;width: 50px;height: 50px;border-radius: 50px;font-size: 20px;';
    }
    else if (paigNumber.textContent < objJson2.length / lengthMas) {
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

        if (objJson2[a] === undefined) {
            break;
        }
        else if (mas1.length < lengthMas) {
            mas1.push(objJson2[a]);
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

    if (Math.ceil(paigNumber.textContent) == Math.ceil(objJson2.length / getMasLength())) {
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
    if (objJson2.length % getMasLength() == 0) {
        a = getMasLength()
    }
    else if (objJson2.length % getMasLength() !== 0) {
        a = objJson2.length % getMasLength()
        a = objJson2.length - a
    }

    for (a; a < objJson2.length;) {
        if (objJson2[a] === undefined) {
            paigNumber.textContent = Math.ceil(paigNumber.textContent)
            break;
        }
        else if (mas1.length < lengthMas) {
            mas1.push(objJson2[a]);
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
