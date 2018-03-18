import React, {Component} from 'react';
import Card from 'components/Card';

export default class Game extends Component {
	constructor(props) {
		super(props);
		this.cardButtons = this.createCards(this.props.iconset);
		this.state = {
			openCard: '',
			totalClickCount: 0,
			cardsMatched: 0
		};
		this.matchCards = this.matchCards.bind(this);
		this.prepareCards = this.prepareCards.bind(this);
		this.createCards = this.createCards.bind(this);

		this.cards = this.prepareCards(this.cardButtons, this.props.tileCount);
	}

	matchCards(card) {

		if(card.props.isMatched || card.props.isFlipped) return;

		let newTileIdx = !!card ? card.props.idx : '';
		let cards = this.cards;
		card = cards[card.props.seq];
		card.isFlipped = true;

		this.setState({
			cards
		});

		if (!this.state.openCard) {
			this.setState({
				openCard: card
			});
		} else if (this.state.openCard.idx === newTileIdx) {
			this.freezeCards(this.state.openCard, card);
		} else {
			this.resetCards(this.state.openCard, card);
		}
	}

	freezeCards(openCard, newCard) {
		openCard.isMatched = true;
		newCard.isMatched = true;
		this.setState({openCard: ''});
	}


	resetCards(openCard, newCard) {
		setTimeout(()=>{
			openCard.isFlipped = false;
			newCard.isFlipped = false;
			this.setState({openCard: ''});
		}, 1000);
	}

	createCards(iconset) {
		return iconset.map((item, idx) => ({idx: idx, iconName: item, isFlipped: false, isMatched: false}));
	}

	getRandomIndices(max, min, setCount = max) {
		let randomIndices = new Set();
		while (randomIndices.size < setCount) {
			randomIndices.add(Math.floor(Math.random() * (max - min + 1)) + min);
		}
		return randomIndices.values();
	}

	prepareCards(cardButtons, count) {
		let iconsetLength = cardButtons.length;
		let halfCount = count / 2;
		let cards = [...this.getRandomIndices((iconsetLength - 1), 0, halfCount)].map(cardIndex=> cardButtons[cardIndex]);
		return [...this.getRandomIndices((count - 1), 0, count)].map((index, seqIdx)=> {
			let card = (cards[index] || cards[index - halfCount]);
				card['seqIdx'] = seqIdx;
				return {...card};
			});
	}

	render() {
		return (
			<div className="Game">
				{this.cards.map(card =>
					<Card idx={card.idx} seq={card.seqIdx} matchCards={this.matchCards} iconName={card.iconName} isFlipped={card.isFlipped} isMatched={card.isMatched}/>)}
			</div>
		)
	}
}

