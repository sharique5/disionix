import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
                                            {/* <NavLink onClick={() => setMobileMenu(false)} className="current-menu-item"
                                                to={"/"}>
                                                {'Home'}
                                            </NavLink> */}
                                            <a href={"#home"} onClick={() => setMobileMenu(false)} className="current-menu-item">
                                                {"Home"}
                                            </a>
                                        </li>
                                        <li>
                                            {/* <NavLink onClick={() => setMobileMenu(false)} className="current-menu-item"
                                                to={"#service"}>
                                                {"Service"}
                                            </NavLink> */}
                                            <a href={"#service"} onClick={() => setMobileMenu(false)} className="current-menu-item">
                                                {"Service"}
                                            </a>
                                        </li>
                                        <li>
                                            {/* <NavLink onClick={() => setMobileMenu(false)} className="current-menu-item"
                                                to={"/about"}>
                                                {"About"}
                                            </NavLink> */}
                                            <a href="#about" onClick={() => setMobileMenu(false)} className="current-menu-item">
                                                {"About"}
                                            </a>
                                        </li>
                                        <li>
                                            {/* <NavLink onClick={() => setMobileMenu(false)} className="current-menu-item"
                                                to={"/project-details"}>
                                                {"Project"}
                                            </NavLink> */}
                                            <a href="#project" onClick={() => setMobileMenu(false)} className="current-menu-item">
                                                {"Project"}
                                            </a>
                                        </li>
                                        {/* <li>
                                            <NavLink onClick={() => setMobileMenu(false)} className="current-menu-item"
                                                to={"/blog-details"}>
                                                {"Blog"}
                                            </NavLink>
                                        </li> */}
                                        <li>
                                            {/* <NavLink onClick={() => setMobileMenu(false)} className="current-menu-item"
                                                to={"/contact"}>
                                                {"Contact"}
                                            </NavLink> */}
                                            <a href="#contact" onClick={() => setMobileMenu(false)} className="current-menu-item">
                                                {"Contact"}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/* <!-- Main Menu END --> */}
                        </div>

                        <div className="menu-btn">
                            <a href={"mailto:admin@disionix.com"} className="btn theme-btn">
                                {"Connect With Us"}
                                <i className="icofont-arrow-right"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- END Header Upper --> */}
        </header>
    );
}

export default Header;