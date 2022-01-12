import React, { useState } from "react";
import closeMenu from "./assets/x.png";
import menuIcon from "./assets/menu.png";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const [clickk, setClick] = useState(false);
    const handleClick = () => setClick(!clickk);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <header className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <Link to="/" className="logo-a">
                        <h1>Louise Derzansky</h1>
                        <p>Life and ADD/ADHD Coaching</p>
                    </Link>
                </div>
                <ul className={clickk ? "nav-options active" : "nav-options"}>
                    <Link to="/" className="option" onClick={closeMobileMenu}>
                        Home
                    </Link>
                    <Link to="/about" className="option" onClick={closeMobileMenu}>
                        About
                    </Link>
                    <Link to="/services" className="option" onClick={closeMobileMenu}>
                        Services
                    </Link>
                    <Link to="/add" className="option" onClick={closeMobileMenu}>
                        ADD/ADHD
                    </Link>

                    <Link to="/contact" className="option" onClick={closeMobileMenu}>

                        Contact

                    </Link>
                </ul>

            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {clickk ? (
                    <img src={closeMenu} className="menu-icon" />
                ) : (
                    <img src={menuIcon} className="menu-icon" />
                )}
            </div>


        </header>
    );
};

export default Header;























// import React, { useState } from "react";
// import closeMenu from "./assets/x.png";
// import menuIcon  from "./assets/menu.png";
// import './Header.css';


// const Header = () => {

//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);
//     return (
//         <div className="primary-header">
//             <div className="logo-nav">
//                 <div className="logo-container">

//                     </a>
//                 </div>

//                 <ul className={click ? "nav-options active" : "nav-options"}>
//                     <li className="option" onClick={closeMobileMenu}>
//                         <a href="#">Home</a>
//                     </li>
//                     <li className="option" onClick={closeMobileMenu}>
//                         <a href="#">About</a>
//                     </li>
//                     <li className="option" onClick={closeMobileMenu}>
//                         <a href="#">Services</a>
//                     </li>
//                     <li className="option" onClick={closeMobileMenu}>
//                         <a href="#">ADD/ADHD</a>
//                     </li>
//                     <li className="option" onClick={closeMobileMenu}>
//                         <a href="" className="cta">
//                             Contact
//                         </a>
//                     </li>
//                     <img src={menuIcon} className="menu-icon" />
//                     <li className="option mobile-option" onClick={closeMobileMenu}>
//                         <a href="" className="cta">
//                             Contact
//                         </a>
//                     </li>
//                 </ul>
//             </div>

//             <ul className="contact">

//                 <li className="sign-in" onClick={closeMobileMenu}>
//                     <a href="" className="cta">
//                         Contact
//                     </a>
//                 </li>
//             </ul>
//             <div className="mobile-menu" onClick={handleClick}>
//                 {click ? (
//                     <img src={menuIcon} className="menu-icon" />
//                 ) : (
//                     <img src={closeMenu} className="menu-icon" />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Header;

