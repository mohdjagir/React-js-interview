import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const RootLoayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet /> {/*when page load will happen so outlet work to show ui based on nav selection*/}
    </div>
  )
}

export default RootLoayout