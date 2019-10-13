const REVIEWS_URL = 'http://localhost:3000/reviews'

export function deleteReview(reviewId) {
  return dispatch => {
    fetch(REVIEWS_URL + '/' + reviewId, {
      method:'DELETE',
      headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
      }
      // body: JSON.stringify({id: reviewId})
    })
    .then(response => response.json())
    .then(responseJSON => {
        dispatch({type:"DELETE_REVIEW", review: responseJSON});
    })

  }
}
