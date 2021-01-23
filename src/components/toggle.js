import React, { useEffect } from "react"
// import { connect } from "react-redux"
import { useSelector, useDispatch } from "react-redux"

const Toggle = () => {
  const navVisibility = useSelector(state => state.message.navVisibility)
  const dispatch = useDispatch()
  useEffect(() => {
    if (navVisibility) {
      dispatch({ type: "CLOSE_NAV" })
      // console.log(" fffffff oooooo")
    }
  }, [ dispatch])
  return <></>
}

// const mapStateToProps = state => ({
//   navVisibility: state.message.navVisibility,
// })

// export default connect(mapStateToProps)(Toggle)

export default Toggle
