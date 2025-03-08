import React from 'react'
import { Link,NavLink } from 'react-router'


const Navbar = () => {
    return (
        <div>
            <ul>
                {/* <Link to='/'><li>Home</li></Link>
                <Link to='/setting'><li>Settins</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <Link to='/about'><li>About</li></Link> */}
                <NavLink to='/'><li>Home</li></NavLink> {/* this is for tracking the path use navlink*/}
                <NavLink to='/setting'><li>Settins</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/jobs'><li>Jobs</li></NavLink>
            </ul>
        </div>
    )
}

export default Navbar