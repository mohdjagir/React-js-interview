import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Jobs = () => {
  let navigate= useNavigate();
  return (
    <>
     <div>Jobs Page</div>
     <button onClick={()=>navigate('1')}>Click 1</button>
    </>
   
  )
}

export default Jobs