import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/meetings">Meetings</NavLink>
            <NavLink to="/coaches">Coaches</NavLink>
            <NavLink to="/games">Games</NavLink>
        </div>
    )
}

export default NavBar