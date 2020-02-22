import React from 'react'
import PropTypes from 'prop-types';
import './../assets/cards.css';
import {connect} from "react-redux";
import {drawCard, resetDeck} from "../actions";
import Hand from "./Hand";

class Deck extends React.Component {

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.props.resetDeck(1);
    }

    onClick(){
        //this.props.resetDeck(1);
        this.props.drawCard();
        console.log(this);
        this.forceUpdate();
    }

    render(){

        if( this.props.blackjack.deck && this.props.blackjack.deck._stack ){
            console.log('blackjack',this.props.blackjack);
        }

        console.log(this.props.blackjack.player1);
        return <div className="playingCards fourColours rotateHand">
            <div>Cards Remaining: {this.props.blackjack.deck._stack.length}</div>
            <br/>
            <button className={'btn btn-primary'}
                    onClick={() => this.props.resetDeck()}
            >New Deck</button>
            <br/>
            <br/>
            <br/>
            <div className="card back"
                 onClick={this.onClick}>*</div>

            <Hand player={'player1'} cards={[]}>
            </Hand>

            </div>;
    }
};

const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = dispatch => ({
    resetDeck: (payload) => dispatch(resetDeck(payload)),
    drawCard: () => dispatch(drawCard()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Deck);


