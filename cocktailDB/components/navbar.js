// navbar 
import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>
            {/* logo */}
            <div className="logo">The <span className="logo-colour">CockTail</span> DB</div>
            <div className="links">
                <Link to='/' className="link home">Home</Link>
                <Link to='/about' className="link about">About</Link>
            </div>
        </nav>
    )
}
