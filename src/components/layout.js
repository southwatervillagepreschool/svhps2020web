import React from "react"
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
      <main>{children}</main>
      <OfstedLogo />
      <Footer />
    </NavProvider>
  )
}

export default Layout
