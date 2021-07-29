export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginSuccess = (uid) => {
  return {
    type: LOGIN_SUCCESS,
    uid: uid
  }
}
export const loginError = () => {
  return {
    type: LOGIN_ERROR
  }
}
