import { PUT_DATA } from '../actions/films'

const INITIAL_STATE = {
  menuData: [],
}

export default (_state = INITIAL_STATE, action) => {
  switch (action.type) {

    case PUT_DATA:
      return {
        ..._state,
        menuData: action.payload,
      }

    default:
      return _state
  }
}        