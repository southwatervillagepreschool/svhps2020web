import React from "react"
import logo from "../images/Ofsted_Good_GP_Colour.jpg"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet"
// import "../styles/normalize.css"
// import "../styles/main.css"
// import "../styles/styles.css"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pathname.replace("/", "")|| 'home'}</title>
        <link
          rel="canonical"
          href="https://southwatervillagepreschool.github.io/svhps2020web/"
        />
      </Helmet>
      <Header />
      {/* <h2>{JSON.stringify(location)}</h2> */}
      <main>{children}</main>
      <img className="logo-ofsted" src={logo} alt="" />
      <Footer />
    </div>
  )
}

export default Layout
