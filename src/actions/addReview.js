// move URL to root and then import
const GIFT_URL = 'http://localhost:3000/gift/'

// where do I get giftID & text?? from reviewinput where it is called
// fetch with post request
export function addReviews(giftId, text, user) {
  return (dispatch) => {
    fetch(GIFT_URL + giftId + '/reviews', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        // is text properly passed in here?
        body: JSON.stringify({text: text, gift_id: giftId, user_id: user.id})
        }
    )
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'ADD_REVIEW', reviews: responseJSON});
      })
  }
}
