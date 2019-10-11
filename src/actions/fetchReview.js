// move URL to root and then import
const GIFT_URL = 'http://localhost:3000/gift/'

// where do I get giftID ??
// fetch with get request
export function fetchReviews(giftId) {
  return (dispatch) => {
    fetch(GIFT_URL + giftId + '/reviews')
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'REVIEWS_COMPLETE', reviews: responseJSON});
      })
  }
}
