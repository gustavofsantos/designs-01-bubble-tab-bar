import React from "react";
import { connect } from "react-redux";
import Home from "../pages/Home";
import Docs from "../pages/Docs";
import Menu from "../pages/Menu";
import Speech from "../pages/Speech";

export function Content(props) {
  switch (props.page) {
    case "HOME":
      return <Home />;
    case "SPEECH":
      return <Speech />;
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
