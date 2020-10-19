import React, { useState, useContext } from "react"
// import styled from "styled-components"
// import "../styles/hamburger.css"

import { NavContext, NavDispatchContext } from "../NavigationProviders"

const MenuButton = () => {
  const navStatus = useContext(NavContext)
  const setNavStatus = useContext(NavDispatchContext)
  
  console.log("status:", navStatus)
  const [toggle, setToggle] = useState(navStatus)

  const handleClick = () => {
    setToggle(previousState => !previousState)

    setNavStatus()
  }
  return (
    <button
      onClick={() => handleClick()}
      className={toggle ? "nav__toggle nav-open" : "nav__toggle"}
    >
      <div className="hamburger"></div>
    </button>
  )
}

export default MenuButton
