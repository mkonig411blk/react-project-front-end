// move URL to root and then import
const REVIEWS_URL = 'http://localhost:3000/reviews'

// fetch with get request
export function fetchReviews() {
  return (dispatch) => {
    fetch(REVIEWS_URL)
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'REVIEWS_COMPLETE', reviews: responseJSON});
      })
  }
}
