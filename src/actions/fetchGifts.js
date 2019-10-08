const BASE_URL = 'http://localhost:3000/gifts'

export function fetchGifts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GIFTS' });
    fetch(BASE_URL)
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'GIFTS_COMPLETE', gifts: responseJSON});
      })
  }
}


// from lab
// export const fetchCats = () => {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_CATS'})
//     fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
//       return response.json()
//     }).then(responseJSON => {
//       dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
//     })
//   }
// }
