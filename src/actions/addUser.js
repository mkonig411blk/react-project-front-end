// move URL to root and then import
const USERS_URL = 'http://localhost:3000/users'

export function addUser(name) {
  return (dispatch) => {
    fetch(USERS_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name: name})
        }
    )
      .then(response => response.json())
      // .then(responseJSON => {
      //     dispatch({type: 'ADD_USER', user: responseJSON});
      // })
      .then(console.log)
  }
}
