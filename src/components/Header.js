import React from "react"

import { Link } from "gatsby"
import logo from "../images/logo-square-no-words.png"
// import "../styles/hamburger.css"
import MenuButton from "./MenuButton"

const Header = () => {
  return (
    <header>
      <Link to="/about">
        <img src={logo} alt="" className="logo" />
      </Link>
      <Link to="/">
        <h1>Southwater Village Preschool</h1>
      </Link>
      {/* <button>
        <div className="hamburger"></div>
      </button> */}
      <MenuButton />
      <nav>
        <Link activeClassName="active" to="/">
          Home
        </Link>
        <Link activeClassName="active" to="/about">
          About
        </Link>
        <Link activeClassName="active" to="/contact">
          Contact Us
        </Link>
        <Link activeClassName="active" to="/news">
          News
        </Link>
      </nav>
    </header>
  )
}

export default Header
