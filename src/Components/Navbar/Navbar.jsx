/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo3.png";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prevState) => !prevState);
  };

  return (
    <nav className={`nav-container ${sticky ? "dark-nav" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className={`nav-links ${mobileMenu ? "active-menu" : ""}`}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500} onClick={() => setMobileMenu(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-300} duration={500} onClick={() => setMobileMenu(false)}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500} onClick={() => setMobileMenu(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-300} duration={500} onClick={() => setMobileMenu(false)}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-300} duration={500} onClick={() => setMobileMenu(false)}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-300}
            duration={500}
            className="btn"
            onClick={() => setMobileMenu(false)}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <IoMenuOutline className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
