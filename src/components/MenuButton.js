import React from "react"
import { connect } from "react-redux"

const MenuButton = ({ navVisibility, dispatch }) => {

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_NAV" })}
      className={navVisibility ? "nav__toggle nav-open" : "nav__toggle"}
    >
      <div className="hamburger"></div>
    </button>
  )
}

const mapStateToProps = state => ({
  navVisibility: state.message.navVisibility,
})

export default connect(mapStateToProps)(MenuButton)
