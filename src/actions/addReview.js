// move URL to root and then import
const GIFT_URL = 'http://localhost:3000/gifts/'

// fetch with post request
export function addReview(giftId, text, user) {
  return (dispatch) => {
    fetch(GIFT_URL + giftId + '/reviews', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({text: text, gift_id: giftId, user: user})
        }
    )
    .then(console.log)
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'ADD_REVIEW', review: responseJSON});
      })
  }
}
