import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
// Images

const Header = () => {

    const [isOpen, setOpen] = useState(false);



  return (
    <header>
        <div className="container">

        <div className="navbar-container">

            <div className="leftIcon">
                {/* <img className='logoPng' src={portfolioLogo} alt="" /> */}
                <Link to='/contact'>
                    <button className='contactMe btn'>
                        <i className="fa-solid fa-user-tie"></i>
                        Contact Me
                    </button>
                </Link>
            </div>

            <Link to='/'>
                <h1 className='center-text'>Portfolio</h1>
            </Link>

            <div className="hamburgerIconBox">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

        </div>
        </div>
    </header>
  )
}

export default Header