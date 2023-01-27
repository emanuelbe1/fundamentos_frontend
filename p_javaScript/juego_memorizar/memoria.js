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
    const grid = document.querySelector('.grid')
    //creamos nuestro tablero
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card= document.createElement('img')
            card.setAttribute('src', 'imagenes/blank.jpg')
            card.setAttribute('data-id', i)
            //card.addEventListener('click',flipcard)
            grid.appendChild(card)
    }
}


createBoard()





})