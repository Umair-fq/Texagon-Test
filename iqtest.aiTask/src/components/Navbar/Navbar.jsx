import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const links = [
        { name: "Home", link: "/" },
        { name: "Start Test", link: "/starttest" },
        { name: "Check Certificate", link: "/checkcert" },
        { name: "Pro Pricing", link: "/pricing" },
    ];

    return (
        <nav className='navbar'>
            <div className="navbar-logo">
                <img src="https://th.bing.com/th/id/OIP.p0VgtQXhXVTA-Zz69D8pwAHaHa?rs=1&pid=ImgDetMain" alt="Logo" className='logo'/>IqTest.ai
            </div>
            <ul className="navbar-links">
                {links.map((linkItem) => (
                    <li key={linkItem.name}>
                        <NavLink to={linkItem.link} activeClassName="active-link" exact>{linkItem.name}</NavLink>
                    </li>
                ))}
            </ul>
            <select className="language-select">
                <option value="en">English</option>
            </select>
            <button className="login-button">Login</button>
        </nav>
    );
};

export default Navbar;
