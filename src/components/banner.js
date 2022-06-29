import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  grid-column: 1 / 4;
`
const Banner = ({ title, subtext }) => {
  return (
    <StyledDiv>
      <h3>
        {title ||
          `We are currently accepting enquiries for January 2021 intake`}
      </h3>
      {subtext && <p>{}</p>}
    </StyledDiv>
  )
}

export default Banner
