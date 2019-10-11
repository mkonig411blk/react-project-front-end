import uuid from 'uuid';

export default function manageGifts(state = {
  gifts: [],
  reviews: [],
    }, action) {
  switch (action.type) {
    case 'GIFTS_COMPLETE':
          return {
              gifts: action.gifts
          }
    case 'REVIEWS_COMPLETE':
        return {
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
};

// WITHOUT REVIEWS
// const manageGifts = (state = { gifts: [] }, action) => {
//   switch(action.type) {
//     case 'GIFTS_COMPLETE':
//         return {
//             gifts: action.gifts
//         }
//     default:
//       return state;
//   }
// }
