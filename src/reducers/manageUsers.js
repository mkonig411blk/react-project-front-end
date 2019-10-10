const managerUsers = (state = { users: [], loggedIn: false }, action) => {
  switch(action.type) {
    case 'LOADING_USERS':
      return {
        ...state,
        users: [...state.users],
        loggedIn: false
      }
    case 'ADD_USER':
      return {
        ...state,
        users: action.user,
        loading: false
      }
    default:
      return state;
  }
}

export default manageUsers;
