import React from 'react'
import {Header} from './indes'
const Layoutt = ({children}) => {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}

export default Layoutt