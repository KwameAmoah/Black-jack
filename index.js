

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







    
 let player = {
    name:"Kwame" ,
    chips: 250 
    
}
let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("card-el")
let playerEl = document.querySelector("#player-el")
playerEl.textContent= player.name + ": $" + player.chips


function getRandomCard() {
    let randomCard = Math.floor(math.random()*13) + 1
    
    if (randomCard > 10) {
        return 10
    } else if(randomCard ===1) {
        return 11
    }    else {
        return randomCard
    }

}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}

function renderGame() {
    cardsEl.textContent += cards[0] + " " + cards[1]
    // cardsEl.textContent = "cards: "
    for ( let i = 0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum
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
//     if (isAlive && !hasBlackJack) {
//         let card = getRandomCard()
//         sum += card 
//         // cardsEl.textContent += card
//         cards.push(card)
//         renderGame()
// }

    if ( isAlive === true && hasBlackJack=== false ) {
        let card = getRandomCard()
        sum += card 
        // cardsEl.textContent += card
        cards.push(card)
        renderGame()

    }
}



