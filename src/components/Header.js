import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo-square-no-words.png"
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
    </header>
  )
}

export default Header
