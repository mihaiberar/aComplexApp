import React, { useState } from 'react'
import styles from './SignUpForm.module.css'
import { registerUser } from '../../../firebase/api'
import { useHistory } from 'react-router'
function SignUpForm() {
  const [fullName, setFullName] = useState('')
  const [fullNameError, setFullNameError] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordInputError, setPasswordInputError] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [emailInputError, setEmailInputError] = useState('')
  const createdAt = new Date()
  const history = useHistory()
  function fullNameChangeHandler(event) {
    setFullName(event.target.value)
  }
  function passwordChangeHandler(event) {
    setPasswordInput(event.target.value)
  }
  function emailChangeHandler(event) {
    setEmailInput(event.target.value)
  }
  function validateInputs() {
    let fullNameError = ''
    let passwordInputError = ''
    let emailInputError = ''
    if (!/^[0-9a-zA-Z]+$/.test(fullName) && !/^[a-zA-Z '-]+$/.test(fullName)) {
      fullNameError = "only letters, numbers, - and '"
    }
    if (!fullName) {
      fullNameError = 'This is required.'
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordInput)) {
      passwordInputError = 'min 8 chars, min 1 uppercase, min one number, min one special char'
    }
    if (!passwordInput) {
      passwordInputError = 'This is required.'
    }
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(emailInput)) {
      emailInputError = 'Invalid email'
    }
    if (!emailInput) {
      emailInputError = 'This is required.'
    }
    if (fullNameError.length !== 0 || passwordInputError.length !== 0 || emailInputError.length !== 0) {
      setFullNameError(fullNameError)
      setPasswordInputError(passwordInputError)
      setEmailInputError(emailInputError)
      return false
    }
    if (fullNameError.length === 0 || passwordInputError.length === 0 || emailInputError.length === 0) {
      setFullNameError('')
      setPasswordInputError('')
      setEmailInputError('')
      return true
    }
    return true
  }
  async function submitSignUp() {
    const isValid = validateInputs()
    if (isValid) {
      await registerUser(createdAt, emailInput, passwordInput, fullName)
      // eslint-disable-next-line no-console
      console.log(fullName)
      history.push('/login')
    }
  }
  return (
    <div className={styles.signUpForm}>
      <p className={styles.signUpName}>Sign up</p>
      <label className={styles.labelInput}>
        Full name
        <input
          type="text"
          className={styles.fullNameInput}
          onChange={(event) => fullNameChangeHandler(event)}
          value={fullName}
        />
        <label className={styles.errorMessage}>{fullNameError}</label>
      </label>
      <label className={styles.labelInput}>
        Password
        <input
          type="password"
          className={styles.passwordInput}
          onChange={(event) => passwordChangeHandler(event)}
          value={passwordInput}
        />
        <label className={styles.errorMessage}>{passwordInputError}</label>
      </label>
      <label className={styles.labelInput}>
        Email
        <input
          type="text"
          className={styles.emailInput}
          onChange={(event) => emailChangeHandler(event)}
          value={emailInput}
        />
        <label className={styles.errorMessage}>{emailInputError}</label>
      </label>
      <button className={styles.signUpButton} onClick={submitSignUp}>
        Sign up
      </button>
      <div className={styles.haveAccount}>
        <p>Already a member?</p>
        <a href="/" className={styles.signIn}>
          Sign In
        </a>
      </div>
    </div>
  )
}
export default SignUpForm
