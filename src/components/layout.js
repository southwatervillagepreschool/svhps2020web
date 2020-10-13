import React from "react"
import logo from "../images/Ofsted_Good_GP_Colour.jpg"

import "../styles/normalize.css"
import "../styles/main.css"
import "../styles/styles.css"

import Header from "./Header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}

        
      </main>
      <img class="logo-ofsted" src={logo} alt="" />
      <Footer />
    </div>
  )
}

export default Layout
