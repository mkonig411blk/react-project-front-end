// move URL to root and then import
const USERS_URL = 'http://localhost:3000/users'

export function addUser(name) {
  return (dispatch) => {
    fetch(USERS_URL, {
        method: "POST",
        headers: {
            'Content-Type: application/json',
            'Accept: application/json'
        },
        // do i pass name as is?
        body: JSON.stringify(name)
        }
    )
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'ADD_USER', user: responseJSON});
      })
  }
}
