// // import cuid from 'cuid';
// // export const cuidFn = cuid;
//
// export default function manageGifts(state = {
//   gifts: [],
//   reviews: [],
// }, action) {
//   switch (action.type) {
//     //
//     // case 'ADD_RESTAURANT':
//     //
//     //   const restaurant = { text: action.text, id: cuidFn() };
//     //   return {
//     //     ...state,
//     //     restaurants: [ ...state.restaurants, restaurant]
//     //   }
//     //
//     // case 'DELETE_RESTAURANT':
//     //   const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
//     //   return { ...state, restaurants}
//
//     // case 'ADD_REVIEW':
//     //
//     //   const review = { text: action.review.text, giftId: action.review.giftId, id: cuidFn() };
//     //   return { ...state,
//     //     reviews: [...state.reviews, review]
//     //   }
//     //
//     // case 'DELETE_REVIEW':
//     //   const reviews = state.reviews.filter(review => review.id !== action.id);
//     //   return {...state, reviews }
//
//     default:
//       return state;
//
//   }
// };


const manageGifts = (state = { gifts: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_GIFTS':
      return {
        ...state,
        gifts: [...state.gifts],
        loading: true
      }
    case 'GIFTS_COMPLETE':
        return {
            gifts: action.gifts,
            loading: false
        }
    default:
      return state;
  }
}

export default manageGifts;
