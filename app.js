const cardsArray = [
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardsArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector('#grid');
const result = document.querySelector('#result');

let resultCounter = 0;
result.innerHTML = resultCounter;

let cardsChosen = [];
let cardsChosenIDs = [];
const cardsWon = [];


function createBoard() {
    for (let index = 0; index < 12; index++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.addEventListener('click', flipCard);
        card.setAttribute('id', index);
        grid.append(card);
    }
}

createBoard();

function cardsMatch() {
    const cards = document.querySelectorAll('img');
    const option1 = cardsChosenIDs[0];
    const option2 = cardsChosenIDs[1];
    if (option1 == option2) {
        alert('You have clicked the same image twice!');
        cards[option1].setAttribute('src', 'images/blank.png');
    } else {
        if (cardsChosen[0] == cardsChosen[1]) {
            cards[option1].setAttribute('src', 'images/white.png');
            cards[option2].setAttribute('src', 'images/white.png');
            cards[option1].removeEventListener('click', flipCard);
            cards[option2].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
            resultCounter += 1;
        } else {
            cards[option1].setAttribute('src', 'images/blank.png');
            cards[option2].setAttribute('src', 'images/blank.png');
        }
        result.innerHTML = resultCounter;
    }
    cardsChosen = [];
    cardsChosenIDs = [];
    if (cardsWon.length == cards.length / 2) {
        result.innerHTML = 'Congratulations! you found all them...';
    }
}




function flipCard() {
    const cardID = this.getAttribute('id');
    cardsChosen.push(cardsArray[cardID].name);
    cardsChosenIDs.push(cardID);
    console.log(cardsChosen);
    console.log(cardsChosenIDs);
    // console.log('clicked', cardID);
    // console.log(cardsArray[cardID].name);
    // console.log(cardsChosen)
    this.setAttribute('src', cardsArray[cardID].img);

    if (cardsChosen.length === 2) {
        setTimeout(cardsMatch, 500);
    }
}
flipCard();