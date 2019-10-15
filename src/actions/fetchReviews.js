import baseUrl from '../fetchUrl'

// fetch with get request
export function fetchReviews() {
  return (dispatch) => {
    fetch(baseUrl + '/reviews')
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'REVIEWS_COMPLETE', reviews: responseJSON});
      })
  }
}
