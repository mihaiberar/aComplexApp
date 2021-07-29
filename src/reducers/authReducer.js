import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/authActions'

const defaultState = {
  loggedIn: false,
  uid: null
}
export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        uid: action.uid,
        loggedIn: true
      }
    case LOGIN_ERROR:
      return {
        ...state
      }
    default:
      return state
  }
}
