import { combineReducers } from 'redux'
import films from './films'

const appReducer = combineReducers({
  films
})

const rootReducer = (state, action) =>  appReducer(state, action)

export default rootReducer