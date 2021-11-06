    // while...loop

    // do...while loop

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGift(gift) {
//     console.log(`Wrapped ${gift} and added a bow!`);
// }

// wrapGift(gifts[0])
// wrapGift(gifts[1])
// wrapGift(gifts[2])

// ^^ repetitive = bad ^^

    // for...loop

// for([initialization]; [condition]; [iteration]) {
//     [loopBody]
// }

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

    // for... with arrays

// const gifts = [ 'teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         // debugger;
//     }
  
//     return gifts;
// }
  
// console.log(wrapGifts(gifts));

function writeCards(array, event) {
    let myArray = []
    for (let i = 0; i < array.length; i++) {
        myArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return myArray
}

function countDown(n) {
    for(n=10; n>=0; n--) {
        console.log(n)
    }
}




// // for (let age = 30; age < 40; age++) {
// //     console.log(`I\'m ${age} years old. Happy birthday to me!`);
// // }

// // const gifts = ["teddy bear", "drone", "doll"];

// // function wrapGifts(gifts) {
// //     for (let i=0; i < gifts.length; i++) {
// //         console.log(`Wrapped ${gifts[i]} and added a bow!`);
// //     }
// //     return gifts;
// // }
// // wrapGifts(gifts);

// const cards = ["Lisa", "Kaitlin", "Jan"];

// // function writeCards(cards) {
// //     let array = []
// //     for (let i = 0; i < cards.length; i++) {
// //         console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
// //         array.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
        
// //     }
// //     return array;
// // }
// // writeCards(cards)

// // function countDown(n) {
// //     let i = n;
// //     while (i>=0) {
// //         console.log(i--)
// //     }
// // }

// // countDown(10);

// function writeCards(cards) {
//     let array = []
//     for(let i = 0; i < cards.length; i++) {
//         array.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
//     }
//     return array
// }

// console.log(writeCards(cards))

// function countDown(n) {
//     let i = n;
//     while (i >= 0) {
//         console.log(i--);
//     }
// }