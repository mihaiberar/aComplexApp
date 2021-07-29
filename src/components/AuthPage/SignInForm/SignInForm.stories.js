import React from 'react'

import SignInForm from './SignInForm'

const stories = {
  title: 'Example/SignInForm',
  component: SignInForm
}

export default stories

const Template = (args) => <SignInForm {...args} />
export const mySignInForm = Template.bind({})
