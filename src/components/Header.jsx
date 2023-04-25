import React from 'react'
import "./Header.css"
import logo from ".././assets/logo1.png"
function Header() {
    return (
        <div className='header'>

            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='name'>
                <h2>System Name</h2>
            </div>
        </div>
    )
}

export default Header