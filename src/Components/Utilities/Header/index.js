import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo";

const Header = () => {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    // Method that will fix header after a specific scrollable
    const isSticky = (e) => {
        const header = document.querySelector('.main-header');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('fixed-header') : header.classList.remove('fixed-header');
    };

    // mobile menu
    const [mobileMenu, setMobileMenu] = useState(false);
    const isMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };


    return (
        <header className="main-header">

            {/* <!-- Header-Upper --> */}
            <div className="header-upper">
                <div className="container clearfix">

                    <div className="header-inner d-lg-flex align-items-center">

                        {/* Logo */}
                        <Logo />

                        <div className="nav-outer clearfix ml-lg-auto mr-lg-auto">
                            {/* <!-- Main Menu --> */}
                            <nav className="main-menu navbar-expand-lg">

                                <div className="navbar-header clearfix">
                                    {/* <!-- Toggle Button --> */}
                                    <button onClick={isMobileMenu} type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className={`navbar-collapse collapse clearfix ${mobileMenu ? 'show' : ''}`}>
                                    <ul className="navigation clearfix">
                                        <li>
                                            <NavLink 
                                                onClick={(e) => {
                                                    setMobileMenu(false)
                                                    window.location.href = "#home";
                                                    e.preventDefault();
                                                }}
                                                className="current-menu-item"
                                                to={"#"}>
                                                {'Home'}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink 
                                                onClick={(e) => {
                                                    setMobileMenu(false)
                                                    window.location.href = "#service";
                                                    e.preventDefault();
                                                }}
                                                className="current-menu-item"
                                                to={"#"}
                                            >
                                                {"Service"}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink 
                                                onClick={(e) => {
                                                    window.location.href = "#about";
                                                    e.preventDefault();
                                                    setMobileMenu(false)
                                                }} 
                                                className="current-menu-item"
                                                to={"#"}>
                                                {"About"}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink 
                                                onClick={(e) => {
                                                    window.location.href = "#project-details";
                                                    e.preventDefault();
                                                    setMobileMenu(false)
                                                }}
                                                className="current-menu-item"
                                                to={"#"}>
                                                {"Project"}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink 
                                                onClick={(e) => {
                                                    window.location.href = "#contact";
                                                    e.preventDefault();
                                                    setMobileMenu(false)
                                                }}
                                                className="current-menu-item"
                                                to={"#"}>
                                                {"Contact"}
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/* <!-- Main Menu END --> */}
                        </div>

                        <div className="menu-btn">
                            <Link 
                                to={"#"}
                                onClick={(e) => {
                                    window.location.href = "mailto:admin@disionix.com";
                                    e.preventDefault();
                                }} 
                                className="btn theme-btn"
                            >
                                {"Connect with us"}
                                <i className="icofont-arrow-right"></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- END Header Upper --> */}
        </header>
    );
}

export default Header;