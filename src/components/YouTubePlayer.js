import React from "react"
import styled from "styled-components"

const Container = styled.article`
  margin: 2em 0;
  /* text-align: center; */
  
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
const YouTubePlayer = ({ src, title, width = 560, height = 315 }) => {
  return (
    <Container>
      <iframe
        title={title || "you tube video"}
        width={`${width}`}
        height={`${height}`}
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Container>
  )
}

export default YouTubePlayer

//https://www.youtube.com/embed/MCl-iClRo9k
