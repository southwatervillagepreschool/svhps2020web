import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo-square-no-words.png"
const Footer = () => {
  return (
    <footer>
      <Link to="/about" >
        <img src={logo} alt="" class="logo" />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/test">Test</Link>
      </nav>
      <p>&copy; 2020 Southwater Village Preschool</p>
    </footer>
  )
}

export default Footer
