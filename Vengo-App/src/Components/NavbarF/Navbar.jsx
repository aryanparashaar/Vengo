import React, { useState } from 'react'; 
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [menu, setMenu] = useState("Home"); 

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="Logo" className="logo" />
            
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
                <li onClick={()=>setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
                <li onClick={()=>setMenu("Mobile App")} className={menu === "Mobile App" ? "active" : ""}>Mobile App</li>
                <li onClick={()=>setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</li>
            </ul>
            
            {/* Navbar Right Section */}
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="Search" />
                <div className='navbar-search-icon'>
                    <img src={assets.basket_icon} alt="Basket" />
                    <div className='dot'></div>
                </div>
                <button className="navbar-button">Sign in</button> 
            </div>
        </div>
    );
}

export default Navbar;

