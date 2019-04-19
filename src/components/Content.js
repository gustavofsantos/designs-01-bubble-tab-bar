import React from "react";
import { connect } from "react-redux";
import Home from "../pages/Home";
import Logger from "../pages/Logger";
import Docs from "../pages/Docs";
import Menu from "../pages/Menu";

export function Content(props) {
  switch (props.page) {
    case "HOME":
      return <Home />;
    case "LOGGER":
      return <Logger />;
    case "DOCS":
      return <Docs />;
    case "MENU":
      return <Menu />;
    default:
      return <Home />;
  }
}

const mapState = state => ({
  page: state.page
});

export default connect(mapState)(Content);
