import React from 'react'
import { connect } from 'react-redux'
import { resetDeck } from '../actions'
import Card from "../components/Card";
import Hand from "../components/Hand";
import Deck from "../components/Deck";

let BlackJackGame = ({ dispatch }) => {
    console.log('game',dispatch);
  return (
    <div>
        <Deck dispatch={dispatch}/>
        <br/>

    </div>
  )
}


const mapStateToProps = state => ({
    ...state,
    deck: [1,2,3],
});

const mapDispatchToProps = dispatch => ({
    resetDeck: (payload) => dispatch(resetDeck(1)),
});

export default connect(mapStateToProps,mapDispatchToProps)(BlackJackGame);
