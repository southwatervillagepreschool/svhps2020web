const initialState = {
  navVisibility: false,
}

export default function (state = initialState, action) {
  const { type } = action

  switch (type) {
    case "TOGGLE_NAV":
      return { ...state, navVisibility: !state.navVisibility }
    case "CLOSE_NAV":
      return { ...state, navVisibility: false }

    default:
      return state
  }
}
