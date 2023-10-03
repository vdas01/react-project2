import React from 'react'
import App from '../App'
import { AppProvider } from './useContext'

const index = () => {
  return (
    <AppProvider>
       <App/>
    </AppProvider>
  )
}

export default index