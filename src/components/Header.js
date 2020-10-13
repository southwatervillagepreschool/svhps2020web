import React from "react"

import { Link } from "gatsby"
// import "../styles/hamburger.css"

const Header = () => {
  return (
    <header>
      <div class="logo"></div>
      <a href="/">
        <h1>Southwater Village Preschool</h1>
      </a>
      <button>
        <div class="hamburger"></div>
      </button>
      <nav>
        <Link activeClassName="active" to="/">
          Home
        </Link>
        <Link activeClassName="active" to="/about">
          About
        </Link>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
        <Link activeClassName="active" to="/test">
          Test
        </Link>
      </nav>
    </header>
  )
}

export default Header
