import React from 'react'
import logo from '../logo.svg'

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-sm">
                    <a className="navbar-brand" href="home">
                        <img src={logo} alt="" width="100" height="50" />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Nav
