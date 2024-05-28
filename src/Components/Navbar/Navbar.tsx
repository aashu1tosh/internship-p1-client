import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import ThemeToggleButton from "ui/atom/ThemeToggleButton/ThemeToggleButton";
import { image } from "../../config/constant/image";
import './Navbar.css';


const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
    return (
        <nav>
            <Link to='/'>
                <div className="nav-brand">
                    <img src={image?.logo} alt="Brand Logo" />
                </div>
            </Link>
            <div className={mobileMenu ? "nav-main" : "hide-mobile-bar nav-main"}>
                <div className="nav-right">
                    <ul>
                        <li>Features</li>
                        <li>Testimonials</li>
                        <li>Highlights</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="nav-left">
                    <ul>
                        <li className='icons'><ThemeToggleButton></ThemeToggleButton></li>
                        <Link to='/signin'><li> Sign in</li></Link>
                        <li id="sign-up">Sign up</li>
                    </ul>
                </div>
            </div>
            <div id="toggle-button">
                <span className='icons' onClick={toggleMenu} style={{ float: 'right' }}>
                    <RxHamburgerMenu size={30} />
                </span>
            </div>

        </nav>
    )
}

export default Navbar