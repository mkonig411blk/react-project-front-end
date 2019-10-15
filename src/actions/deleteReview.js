import baseUrl from '../fetchUrl'

export function deleteReview(reviewId) {
  return dispatch => {
      dispatch({type:"DELETE_REVIEW", reviewId})
    fetch(baseUrl + '/reviews/' + reviewId, {
      method:'DELETE',
      headers:{
        "Content-Type":"application/json"
    },
      body: JSON.stringify({reviewId})
    })
  }
}
