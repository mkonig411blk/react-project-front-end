const USERS_URL = 'http://localhost:3000/users'

// pass in name? need to load users?
export function addUser(name) {
  return (dispatch) => {
    dispatch({ type: 'ADD_USER' });
    fetch(USERS_URL)
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'GIFTS_COMPLETE', gifts: responseJSON});
      })
  }
}
