/*
En este proyecto se van a cubrir:
 · push()
 · querySelector()
 · setAttribute()
 · getAttribute()
 · createElement()
 · appendChild()
 · Math.random()
 · sort()
 · For loops
*/ 
document.addEventListener("DOMContentLoaded", () =>{
    //CARD OPTIONS: Seis comidas (Test)
    const cardArray = [
        {
            name: 'helado',
            img: 'imagenes/helado.png'
        },
        {
            name: 'helado',
            img: 'imagenes/helado.png'
        },
        {
            name: 'huevos',
            img: 'imagenes/huevos.png'
        },
        {
            name: 'huevos',
            img: 'imagenes/huevos.png'
        },
        {
            name: 'leche',
            img: 'imagenes/leche.png'
        },
        {
            name: 'leche',
            img: 'imagenes/leche.png'
        },
        {
            name: 'papas_fritas',
            img: 'imagenes/papas_fritas.png'
        },
        {
            name: 'papas_fritas',
            img: 'imagenes/papas_fritas.png'
        },
        {
            name: 'pez',
            img: 'imagenes/pez.png'
        },
        {
            name: 'pez',
            img: 'imagenes/pez.png'
        },
        {
            name: 'pizza',
            img: 'imagenes/pizza.png'
        },
        {
            name: 'pizza',
            img: 'imagenes/pizza.png'
        }
    ]

cardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen =[]
var cardsChosenId=[]
var CardsWon = []
    //creamos nuestro tablero
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        var card= document.createElement('img')
        card.setAttribute('src', 'imagenes/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}
//comprobar coincidencia
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
        alert('Has encontrado una coincidencia!')
        cards[optionOneId].setAttribute('src', 'imagenes/white.png')
        cards[optionTwoId].setAttribute('src', 'imagenes/white.png')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'imagenes/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'imagenes/blank.jpg')
        alert('Lo siento, intenta de nuevo')
    }
    cardsChosen =[]
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon === cardArray.length/2){
        resultDisplayDisplay.textContent = 'Felicidades! has ganado!'
    }
}

//voltear nuestra tarjeta
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length===2){
        setTimeout(checkForMatch, 500)
    }
}




createBoard()
 




})