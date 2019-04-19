const INITIAL_STATE = {
  page: "HOME"
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "NAVIGATE_HOME":
      return { ...state, page: "HOME" };
    case "NAVIGATE_LOGGER":
      return { ...state, page: "LOGGER" };
    case "NAVIGATE_DOCS":
      return { ...state, page: "DOCS" };
    case "NAVIGATE_MENU":
      return { ...state, page: "MENU" };
    default:
      return { ...state, page: "HOME" };
  }
}
