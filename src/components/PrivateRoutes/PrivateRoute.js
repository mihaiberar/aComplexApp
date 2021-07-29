import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute(props) {
  return (
    <Route exact path={props.path}>
      {!props.loggedIn ? <Redirect to="/login" /> : props.component}
    </Route>
  )
}
export default PrivateRoute
