import {combineReducers} from 'redux';
import uuid from 'uuid';

const userReducerInitialState = {user: null}

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

let giftReducerInitialState = {fetchedGifts: []}

const giftsReducer = (state = giftReducerInitialState, action) => {
  switch(action.type) {
    case 'GIFTS_COMPLETE':
        return {...state,
            fetchedGifts: action.gifts
        };
        default:
          return state;

  }
}

let reviewReducerInitialState = {reviews: []}

const reviewsReducer = (state = reviewReducerInitialState, action) => {
  switch(action.type) {
        case 'REVIEWS_COMPLETE':
            return {
                ...state,
                reviews: action.reviews
            }
        case 'ADD_REVIEW':
            const review = { text: action.review.text, gift_id: action.review.gift_id, user: action.review.user, id: uuid() };
            return { ...state,
                reviews: [...state.reviews, review]
            }
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.reviewId);
            return {...state, reviews }
        default:
          return state;

  }
}

const rootReducer=combineReducers({
  gifts: giftsReducer,
  user: usersReducer,
  reviews: reviewsReducer
})

export default rootReducer;
