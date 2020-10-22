import React from "react"
import logo from "../images/Ofsted_Good_GP_Colour.jpg"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"
import NavFlyout from "./NavFlyout"
import OfstedLogo from "./ofsted-logo"

import { NavProvider } from "../NavigationProviders"

const Layout = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <NavProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pathname.replace("/", "") || "home"}</title>
        <link
          rel="canonical"
          href="https://www.southwatervillagepreschool.org/"
        />
        <html lang="en" />
      </Helmet>
      <NavFlyout />
      <Header />
      {/* <h2>{JSON.stringify(location)}</h2> */}
      <main>{children}</main>
      {/* <img
        style={{ height: "100px", width: "100px" }}
        className="logo-ofsted"
        src={logo}
        alt="OFSTED rated Good "
      /> */}
      <OfstedLogo />
      <Footer />
    </NavProvider>
  )
}

export default Layout
