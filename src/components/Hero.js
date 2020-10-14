import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { Link } from "gatsby"

const BG = styled(BackgroundImage)`
  grid-column: 1 / 4;
  width: 100%;
  min-height: 50vh;
  background-position: center center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: darken;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #fff;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  h2 {
    color: #fff;
    text-transform: uppercase;
  }
`

const BackgroundSection = ({ fluidImage, imageAlt, tagLine, className }) => {
  return (
    <BG
      Tag="section"
      //   className={className}
      fluid={fluidImage}
      //   backgroundColor={`#040e18`}
    >
      <InnerWrapper>
        <h2>{tagLine}</h2>
      </InnerWrapper>
      <Link className="call-to-action" to="/contact">
        Contact Us
      </Link>
    </BG>
  )
}

export default BackgroundSection
