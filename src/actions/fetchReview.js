// move URL to root and then import
const GIFT_URL = 'http://localhost:3000/gift/'

// where do I get giftID ??
// is add_review supposed to be part of same function or do i create a new function?
export function fetchReviews(giftId) {
  return (dispatch) => {
    fetch(GIFT_URL + giftId + '/reviews')
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'REVIEWS_COMPLETE', reviews: responseJSON});
      })
  }
}
