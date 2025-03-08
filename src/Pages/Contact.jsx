import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Contact = () => {
  const navigate= useNavigate();
  return (
    <div>
      <Outlet />
      <button onClick={()=>navigate('info')}>info</button>
      <button onClick={()=>navigate('form')}>form</button>
    </div>
  )
}

export default Contact