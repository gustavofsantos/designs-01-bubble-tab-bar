import React from "react";
import { connect } from "react-redux";
import {
  navigateHomePage,
  navigateLoggerPage,
  navigateMenuPage,
  navigateDocsPage
} from "../store/actions";

export function Navigation(props) {
  return (
    <div className="main-navigation">
      <div>
        <div
          id="home"
          className={props.page === "HOME" ? "active active__home" : ""}
          onClick={props.goPageHome}
        >
          <i className="fas fa-home" />
          <p>Home</p>
        </div>
      </div>
      <div>
        <div
          id="logger"
          className={props.page === "LOGGER" ? "active active__logger" : ""}
          onClick={props.goPageLogger}
        >
          <i className="far fa-clock" />
          <p>Logger</p>
        </div>
      </div>
      <div>
        <div
          className={props.page === "DOCS" ? "active active__docs" : ""}
          onClick={props.goPageDocs}
        >
          <i className="far fa-folder-open" />
          <p>Docs</p>
        </div>
      </div>
      <div>
        <div
          className={props.page === "MENU" ? "active active__menu" : ""}
          onClick={props.goPageMenu}
        >
          <i className="fas fa-bars" />
          <p>Menu</p>
        </div>
      </div>
    </div>
  );
}

const mapState = state => ({
  page: state.page
});

const mapDispatch = dispatch => ({
  goPageHome: () => dispatch(navigateHomePage()),
  goPageLogger: () => dispatch(navigateLoggerPage()),
  goPageDocs: () => dispatch(navigateDocsPage()),
  goPageMenu: () => dispatch(navigateMenuPage())
});

export default connect(
  mapState,
  mapDispatch
)(Navigation);
