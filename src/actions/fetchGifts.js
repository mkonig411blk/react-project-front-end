import baseUrl from '../fetchUrl'

export function fetchGifts() {
  return (dispatch) => {
    fetch(baseUrl + '/gifts')
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'GIFTS_COMPLETE', gifts: responseJSON});
      })
  }
}
