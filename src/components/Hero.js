import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { Link } from "gatsby"

// this is set in the styles.css // --layout-header-height: 80px;
const headerHeight = "80px"

const BG = styled(BackgroundImage)`
  grid-column: 1 / 4;
  width: 100%;
  min-height: calc(75vh - ${headerHeight});
  background-position: center center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: darken;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #fff;
    text-align: center;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  h2 {
    color: #fff;
    text-transform: uppercase;
  }
`

const BackgroundSection = ({ fluidImage, tagLine, showButton = false }) => {
  return (
    <BG Tag="section" fluid={fluidImage}>
      <InnerWrapper>
        <h2 className="hero__h2">{tagLine}</h2>
      </InnerWrapper>
      {showButton && (
        <Link className="call-to-action" to="/contact">
          Contact Us
        </Link>
      )}
    </BG>
  )
}

export default BackgroundSection
