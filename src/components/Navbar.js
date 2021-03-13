import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    const closeMobileMenu = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link className="navbar-logo" to="/" onClick={closeMobileMenu}>
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <div onClick={handleClick} className="menu-icon">
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link onClick={closeMobileMenu} to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={closeMobileMenu} to="/services" className="nav-links">
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={closeMobileMenu} to="/products" className="nav-links">
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={closeMobileMenu} to="/sign-up" className="nav-links">
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
            </nav>
        </>
    )
}

export default Navbar
