import {combineReducers} from 'redux';
import uuid from 'uuid';

const userReducerInitialState = {user: null }

const usersReducer = (state = userReducerInitialState , action) => {
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

let giftReducerInitialState = {fetchedGifts: [], reviews: []}

const giftsReducer = (state = giftReducerInitialState, action) => {
  switch(action.type) {
    case 'GIFTS_COMPLETE':
        return {...state,
            fetchedGifts: action.gifts
        };
        case 'REVIEWS_COMPLETE':
            return {
                ...state,
                reviews: action.gifts.reviews
            }
        case 'ADD_REVIEW':
            const review = { text: action.review.text, giftId: action.review.giftId, id: uuid() };
            return { ...state,
                reviews: [...state.reviews, review]
            }
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {...state, reviews }
        default:
          return state;

  }
}

const rootReducer=combineReducers({
  gifts: giftsReducer,
  user: usersReducer
})

export default rootReducer;