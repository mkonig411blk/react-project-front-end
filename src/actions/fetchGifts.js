// move URL to root and then import
const GIFTS_URL = 'http://localhost:3000/gifts'

export function fetchGifts() {
  return (dispatch) => {
    fetch(GIFTS_URL)
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'GIFTS_COMPLETE', gifts: responseJSON});
      })
  }
}
