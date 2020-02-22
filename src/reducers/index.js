import { combineReducers } from 'redux'
import todos from './todos'
import blackjack from './deck'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  blackjack,
  visibilityFilter
});

export default todoApp
