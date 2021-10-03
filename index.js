for (let age = 30; age < 40; age++) {
    console.log(`I\'m ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);

const cards = ["Lisa", "Kaitlin", "Jan"];

function writeCards(cards) {
    let array = []
    for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
        array.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
        
    }
    return array;
}
writeCards(cards)

function countDown(n) {
    let i = n;
    while (i>=0) {
        console.log(i--)
    }
}

countDown(10);