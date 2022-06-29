import React, { createContext, useState } from "react"

const NavContext = createContext(undefined)
const NavDispatchContext = createContext(undefined)

function NavProvider({ children }) {
  const [navOpen, toggleNav] = useState(false)

  const handleToggle = () => {
    toggleNav(currentState => !currentState)
  }
  return (
    <NavContext.Provider value={navOpen}>
      <NavDispatchContext.Provider value={handleToggle}>
        {children}
      </NavDispatchContext.Provider>
    </NavContext.Provider>
  )
}

export { NavContext, NavDispatchContext, NavProvider }
