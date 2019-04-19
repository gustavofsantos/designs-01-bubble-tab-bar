import React from "react";
import { connect } from "react-redux";
import {
  navigateHomePage,
  navigateLoggerPage,
  navigateMenuPage,
  navigateDocsPage,
  navigateSpeechPage
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
          id="speech"
          className={props.page === "SPEECH" ? "active active__speech" : ""}
          onClick={props.goPageSpeech}
        >
          <i className="fas fa-volume-up" />
          <p>Speech</p>
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
  goPageDocs: () => dispatch(navigateDocsPage()),
  goPageMenu: () => dispatch(navigateMenuPage()),
  goPageSpeech: () => dispatch(navigateSpeechPage())
});

export default connect(
  mapState,
  mapDispatch
)(Navigation);
