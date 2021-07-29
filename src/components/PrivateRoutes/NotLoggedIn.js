import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function NotLoggedIn(props) {
  return (
    <Route exact path={props.path}>
      {props.loggedIn ? <Redirect to="/" /> : props.component}
    </Route>
  )
}
export default NotLoggedIn
