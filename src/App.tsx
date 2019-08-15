import React from 'react'
import { Hello } from './components/Hello'

export interface AppProps {
  user: string
}

const App = (props: AppProps) => {
  const { user } = props
  return (
    <>
      <h1>{user}</h1>
      <Hello title='World' name='Custom' />
    </>

  )
}

export default App
