import React from 'react'
import { AppContext } from './useContext'

const child = () => {
    const data = useContext(AppContext);
  return (
    <div>child</div>
  )
}

export default child