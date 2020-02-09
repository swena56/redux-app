import React from 'react'
import { connect } from 'react-redux'
import { resetDeck } from '../actions'

let BlackJackGame = ({ dispatch }) => {
  return (
    <div>
        <button type="submit" onClick={ () => resetDeck() }> Reset Deck </button>
    </div>
  )
}
BlackJackGame = connect()(BlackJackGame)

export default BlackJackGame
