import React, { useEffect } from "react"
import { connect } from "react-redux"

const Toggle = ({ navVisibility, dispatch }) => {
  useEffect(() => {
    if (navVisibility) {
      dispatch({ type: "CLOSE_NAV" })
    }
  }, [dispatch])
  return <></>
}

const mapStateToProps = state => ({
  navVisibility: state.message.navVisibility,
})

export default connect(mapStateToProps)(Toggle)
