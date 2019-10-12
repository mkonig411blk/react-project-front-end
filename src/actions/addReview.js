// move URL to root and then import
const GIFT_URL = 'http://localhost:3000/gifts/'
const REVIEW_URL = 'http://localhost:3000/reviews'

// fetch with post request
export function addReview({giftId, gift, text, user, userId}) {
  return (dispatch) => {
    fetch(REVIEW_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({text: text, gift_id: giftId, user_id: userId})
        }
    )
    .then(console.log)
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'ADD_REVIEW', review: responseJSON});
      })
  }
}
