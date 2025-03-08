import React from 'react'
import { Outlet } from 'react-router'
import Jobs from '../Pages/Jobs'

const JobsLayout = () => {
  return (
    <>
         <Jobs />
         <Outlet />
    </>
   
  )
}

export default JobsLayout