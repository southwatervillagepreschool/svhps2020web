import React from "react"

import Layout from "../components/Layout"
import YouTubePlayer from "../components/YouTubePlayer"

const VirtualTour = () => {
  return (
    <Layout>
      {/* <div className="full-bleed">dsadasd</div> */}
      <article>
        <div >
          <YouTubePlayer src="https://www.youtube.com/embed/MCl-iClRo9k" />
        </div>
      </article>
    </Layout>
  )
}

export default VirtualTour
