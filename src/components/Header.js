import React from "react"

import { Link } from "gatsby"
import logo from "../images/logo-square-no-words.png"
// import "../styles/hamburger.css"
import MenuButton from "./MenuButton"
import NavLargeScreens from './NavLargeScreens'

const Header = () => {
  return (
    <header>
      <Link to="/about">
        <img src={logo} alt="" className="logo" />
      </Link>
      <Link to="/">
        <h1>Southwater Village Preschool</h1>
      </Link>
      <MenuButton />
      <NavLargeScreens/>
      {/* <nav role="navigation">
        <ul>
          <li>
            <Link activeClassName="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/about">
              About
            </Link>
            <ul className="dropdown">
              <li>
                <a href="/">one</a>
              </li>
              <li>
                <a href="/">two</a>
              </li>
              <li>
                <a href="/">three</a>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <Link activeClassName="active" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            {" "}
            <Link activeClassName="active" to="/news">
              News
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header
