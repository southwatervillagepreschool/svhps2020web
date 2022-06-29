import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

const Toggle = () => {
  const navVisibility = useSelector(state => state.message.navVisibility)
  const dispatch = useDispatch()
  useEffect(() => {
    if (navVisibility) {
      dispatch({ type: "CLOSE_NAV" })
    }
  }, [dispatch])
  return <></>
}

export default Toggle
