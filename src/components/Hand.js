import React from 'react'
import './../assets/cards.css';
import {drawCard, resetDeck} from "../actions";
import {connect} from "react-redux";
import Card from "./Card";

class Hand extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        if( ! this.props.blackjack[this.props.player] ){
            return <div>Invalid Player</div>;
        }

        if( ! this.props.blackjack[this.props.player].length ){
            return <div>
                No Cards
                <div>Player: {this.props.player}</div>

            </div>;
        }

        const cards = this.props.blackjack[this.props.player];
        let hand = [];
        for (let i = 0; i < cards.length; i++) {
            hand.push(<Card
                key={i}
                onClick={()=>alert('clicked')}
                card={cards[i]}
                completed={false}/>);
        }

        return <div className="playingCards simpleCards fourColours rotateHand">
            <br/>
            <div>Player: {this.props.player}</div>
                <div className={"hand"}>
                    {hand}
                </div>
            </div>;
    }
};

const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = dispatch => ({
    hit: (payload) => dispatch(resetDeck(payload)),
    pass: () => dispatch(drawCard()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Hand);
