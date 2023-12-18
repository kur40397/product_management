import React from 'react'
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
    return (
        <>
            <nav>
                <Link to="/" className='title'>Website</Link>
                <ul>
                    <li>
                        {/*pour changer l'url */}
                        {/* NavLink : add additional feature 
                        , pour ajouter le styling lorsqu'on point sur un lien */}
                        <NavLink to="/about">About</NavLink>
                        {/* react kayajouti lik un active class */}
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Register">Register</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
