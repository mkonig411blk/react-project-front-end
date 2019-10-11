import {combineReducers} from 'redux';

const usersReducer = (state = false , action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}

const giftsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GIFTS_COMPLETE':
        return [...state, action.gifts];
    default:
      return state;
  }
}

const rootReducer=combineReducers({
  gifts: giftsReducer,
  user: usersReducer
})

export default rootReducer;
