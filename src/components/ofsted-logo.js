import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const OfstedLogo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Ofsted_Good_GP_Colour.jpg" }) {
        childImageSharp {
          fixed(height: 100, width: 100, quality: 100) {
            srcSet
            src
          }
        }
      }
    }
  `)
  const { srcSet, src } = data.file.childImageSharp.fixed
  return (
    <img
      style={{ height: "100px", width: "100px" }}
      className="logo-ofsted"
      srcSet={srcSet}
      src={src}
      alt="OFSTED rated good Logo"
    />
  )
}

export default OfstedLogo
