import baseUrl from '../fetchUrl'

export function addUser(name, history) {
  return (dispatch) => {
    fetch(baseUrl + '/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name: name})
        }
    )
      .then(response => response.json())
      .then(responseJSON => {
          dispatch({type: 'ADD_USER', user: responseJSON});

      })
    history.push('/gifts')
  }

}
