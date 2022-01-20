import React from "react"
import styled from "styled-components"
import { navigate } from "@reach/router"
// import Layout from "../components/layout"
import Layout from "../components/layout"

const Article = styled.article`
  text-align: center;
  p {
    text-align: center;
  }
`
const CanotFind = () => {
  const handleNavigate = e => {
    e.preventDefault()
    navigate(-1)
  }
  return (
    <Layout>
      <Article>
        <h2>Page not found</h2>
        <p>Oops! the page you are looking for has been removed of relocated.</p>
        <a href="/" onClick={e => handleNavigate(e)}>
          Go Back
        </a>
      </Article>
    </Layout>
  )
}

export default CanotFind
