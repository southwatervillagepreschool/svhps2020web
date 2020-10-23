import React from "react"
import { Link } from "gatsby"

// import logo from "../images/logo-square-no-words.png"
import logo from "../images/logo-square-transparent.svg"
const Footer = () => {
  return (
    <footer>
      <img
        style={{ height: "80px", width: "80px" }}
        src={logo}
        alt=""
        className="logo"
      />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about/about-us">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/news">News</Link>
      </nav>
      <p>&copy; 2020 Southwater Village Preschool</p>
      <p>Registered Charity 1027293</p>
    </footer>
  )
}

export default Footer
