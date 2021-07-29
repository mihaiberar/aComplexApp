import React, { useState } from 'react'
import styles from './SignInForm.module.css'
import { loginUser } from '../../../firebase/api'
import { useHistory } from 'react-router-dom'
//import Cookies from 'js-cookie'

function SignInForm(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  /*
  useEffect(() => {
    readCookie()
  }, [])
*/
  function emailChangeHandler(event) {
    setEmail(event.target.value)
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value)
  }
  /*
  const readCookie = () => {
    const user = Cookies.get(email)
    if (user) {
      props.loginSuccess(props.uid)
    }
  }
*/
  async function submitLogIn() {
    const response = await loginUser(email, password)

    if (response !== undefined) {
      await props.loginSuccess(response.uid)
      // eslint-disable-next-line no-console
      console.log('Logged in')
      history.push('/')
      //Cookies.set(email, setEmail)
      // eslint-disable-next-line no-console
      console.log(props.loggedIn)
      // eslint-disable-next-line no-console
      console.log(response)
    }
  }
  return (
    <div className={styles.signInForm}>
      <p className={styles.signInName}>Sign in</p>
      <label className={styles.labelInput}>
        Email
        <input
          onChange={(event) => emailChangeHandler(event)}
          type="text"
          className={styles.usernameInput}
          value={email}
        />
      </label>
      <label className={styles.labelInput}>
        Password
        <input
          type="password"
          onChange={(event) => passwordChangeHandler(event)}
          className={styles.passwordInput}
          value={password}
        />
      </label>
      <div className={styles.userOptions}>
        <div className={styles.checkSignedIn}>
          <input type="checkbox" className={styles.checkBox} />
          <p>Keep me signed in</p>
        </div>
        <a href="/" className={styles.forgotPassword}>
          Forgot Your Password?
        </a>
      </div>
      <button className={styles.signInButton} onClick={submitLogIn}>
        Sign in
      </button>
      <div className={styles.noAccount}>
        <p>Don't have an account?</p>
        <a href="/signup" className={styles.createAccount}>
          Sign Up
        </a>
      </div>
    </div>
  )
}
export default SignInForm
