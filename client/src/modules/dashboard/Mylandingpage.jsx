import React from 'react'
import Myheaderpage from '../shares/Myheaderpage'
import { Outlet } from 'react-router-dom'


function Mylandingpage() {
  return (
    <div>
      
      <Myheaderpage />

      <Outlet></Outlet>

    </div>
  )
}

export default Mylandingpage
