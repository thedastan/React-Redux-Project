import axios from 'axios'

const initialState = {
  users: ['Ivan'],
  user: {},
  email: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.user] }
    case 'SET_USER':
      return { ...state, user: action.user }
    default:
      return { ...state }
  }
}

export function getPlaceUser(id) {
  return (dispatch) => {
    axios(`http://jsonplaceholder.typicode.com/users/${id}`).then(({ data }) =>
      dispatch({
        type: 'SET_USER',
        user: data,
        email: data
      })
    )
  }
}
