import React from "react"

import "../styles/normalize.css"
import "../styles/main.css"
import "../styles/styles.css"

import Header from "./Header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
