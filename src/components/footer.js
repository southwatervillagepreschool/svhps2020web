import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo-square-no-words.png"
const Footer = () => {
  return (
    <footer>
      {/* <Link to="/about"> */}
      <img src={logo} alt="" className="logo" />
      {/* </Link> */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about/about-us">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/news">News</Link>
      </nav>
      <p>&copy; 2020 Southwater Village Preschool</p>
    </footer>
  )
}

export default Footer
