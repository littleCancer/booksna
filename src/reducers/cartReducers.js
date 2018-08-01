import * as actions from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TO_CART_SUCCESS:
      return action.item;
    case actions.FETCH_CART_SUCCESS:
      return action.items;
    default:

      return state;
  }
}
