import React from "react"

import "../styles/hamburger.css"

const Header = () => {
  return (
    <header>
      <div class="logo"></div>
      <a href="/">
        <h1>Southwater Village Preschool</h1>
      </a>
      <button >
        <div class="hamburger"></div>
      </button>
    </header>
  )
}

export default Header
