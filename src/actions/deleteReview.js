import baseUrl from '../fetchUrl'

export function deleteReview(reviewId) {
  return dispatch => {
    fetch(baseUrl + '/reviews/' + reviewId, {
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
