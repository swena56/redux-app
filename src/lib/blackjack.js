export const getDeck = (numDecks=1) => {
    const Deck = require('card-deck');
    const freshDeck = [
        '2h','3h','4h','5h','6h','7h','8h','9h','10h','Jh','Qh','Kh','Ah',
        '2s','3s','4s','5s','6s','7s','8s','9s','10s','Js','Qs','Ks','As',
        '2c','3c','4c','5c','6c','7c','8c','9c','10c','Jc','Qc','Kc','Ac',
        '2d','3d','4d','5d','6d','7d','8d','9d','10d','Jd','Qd','Kd','Ad',
    ];
    const cards = [...new Array(numDecks)]
        .map(()=> freshDeck)
        .reduce((acc, val) => acc.concat(val), []);

    console.log(`Number of Decks: ${numDecks} (${cards.length} cards)`);
    return new Deck(cards).shuffle();
};