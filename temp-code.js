const getDeck = (numDecks=1) => {
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

const getDeckStats = (deck) => {
	return {
		'2': deck._stack.filter( o => o.startsWith('2') ).length,
		'3': deck._stack.filter( o => o.startsWith('3') ).length,
		'4': deck._stack.filter( o => o.startsWith('4') ).length,
		'5': deck._stack.filter( o => o.startsWith('5') ).length,
		'6': deck._stack.filter( o => o.startsWith('6') ).length,
		'7': deck._stack.filter( o => o.startsWith('7') ).length,
		'8': deck._stack.filter( o => o.startsWith('8') ).length,
		'9': deck._stack.filter( o => o.startsWith('9') ).length,
		'10': deck._stack.filter( o => o.startsWith('10') ).length,
		'J': deck._stack.filter( o => o.startsWith('J') ).length,
		'Q': deck._stack.filter( o => o.startsWith('Q') ).length,
		'K': deck._stack.filter( o => o.startsWith('K') ).length,
		'A': deck._stack.filter( o => o.startsWith('A') ).length,
	}
};

const tallyCards = (cards) => {
	const Deck = require('card-deck');
	const deck = new Deck(cards);
	const stats = getDeckStats(deck);
	const pos = ( stats['2'] * 1  ) + ( stats['3'] * 1  ) + ( stats['4'] * 1  ) + ( stats['5'] * 1  ) + ( stats['6'] * 1  ); 
	const neg = ( stats['10'] * -1  ) + ( stats['J'] * -1  ) + ( stats['Q'] * -1  ) + ( stats['K'] * -1  ) + ( stats['A'] * -1  ); 
	return pos + neg
	return stats;
};

const deck = getDeck(4);
const cards = [];

const drawCard = () => {
	if( deck.remaining() > 0 ){
		return deck.drawRandom();	
	}
};

const calculateCardTotal = (...cards) => {
	let total = 0;
	let numAces = 0;
	let originalCards = cards;
	for (let i = 0; i < cards.length; i++) {
		let card = cards[i].replace('J','10').replace('Q','10').replace('K','10');
		let value = parseInt(card);
		if( value ){
			total += value;
		} else {
			numAces++;
		}
	}
	if( numAces > 0 ){
		const options = [total + 1,total + 11];
		total = options.filter(o => o > 21)[0];
	}

	return {
		cards: originalCards,
		total: total,
	};
};

console.log('Points\n',{
	'1': [ '2','3', '4', '5', '6' ],
	'0': ['7','8','9' ],
	'-1': [ '10', 'J', 'Q', 'K', 'A'] ,
});

/*
https://bicyclecards.com/how-to-play/blackjack/
*/


while( deck.remaining() > 0 ){
	let dealerCards = [];
	const card1Dealer = drawCard();
	const card1 = drawCard();
	const card2 = drawCard();
	const cardsOnTable = [card1,card2,card1Dealer].filter(Boolean);
	cards.push(...cardsOnTable);
	let onDeal = {
		dealer: calculateCardTotal(card1Dealer),
		player: calculateCardTotal(card1,card2),
		tally: tallyCards(cards),
		remaining: deck.remaining(),
	};
	console.log(JSON.stringify(onDeal,null,'\t'));
	//console.log(`Dealer: ( ${card1Dealer} ? ), cards: ( ${card1} ${card2} ), tally: ${tallyCards(cards)}, remaining: ${deck.remaining()}`);
	const card2Dealer = drawCard();
	cards.push(card2Dealer);
	console.log(`Dealer: ${card2Dealer}`)
}




