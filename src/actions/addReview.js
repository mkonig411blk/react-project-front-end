import baseUrl from '../fetchUrl'

// fetch with post request
export function addReview({giftId, userId, gift, text, user}) {
  return (dispatch) => {
    fetch(baseUrl + '/reviews', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({text: text, gift_id: giftId, user_id: userId})
        }
    )
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'ADD_REVIEW', review: responseJSON});
      })
  }
}
