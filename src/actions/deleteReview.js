const REVIEWS_URL = 'http://localhost:3000/reviews'

export function deleteReview(reviewId) {
  return dispatch => {
    fetch(REVIEWS_URL + '/' + reviewId, {
      method:'DELETE',
      headers:{
        "Content-Type":"application/json"
    },
      body: JSON.stringify({reviewId})
    })
    .then(response => response.json())
    .then(responseJSON => {
        dispatch({type:"DELETE_REVIEW", reviewId});
    })

  }
}
