

// if (sum < 21) {
//     console.log("Do you want to draw another card?")
// } else if (sum === 21) {
//     console.log("Blackjack! You win!") 
// } else {
//     console.log('you are out of the game')
// }

// let age = 22
// if(age >= 21){
//     console.log("welcome")
// } else {
//     console.log("you can not enter the club")
// }

// let age = 100
// if( age< 100) {
//     console.log("not eligible")
// }else if (age === 100) {
//     console.log ("eligible for senior discount")
// } else{
//    console.log("over 100, no discount")  
// }

// for ( let m=10; m <=100; m+=10 ) {
//     console.log(m)
// }
// for (let i=0; i<message.length; i++) {

// }
// for (let i=0; i<cards.length; i++) {






let firstCard = getRandomCard
let secondCard = getRandomCard
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("card-el")

function getRandomCard() {

}





function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent += cards[0] + " " + cards[1]
    for (i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent += sum
    if (sum <= 20) {
        message = "Do you want to draw a new card"
    } else if(sum === 21) {
        message = "wohoo! you've got blackjack"
        hasBlackJack = true
    } else {
        message= " youre out of the game"
        isAlive = false
    };
    
    messageEl.textContent = message
}
function newCard() {
    let card = getRandomCard
    sum += card 
    // cardsEl.textContent += card
    cards.push(card)
    renderGame()
}



