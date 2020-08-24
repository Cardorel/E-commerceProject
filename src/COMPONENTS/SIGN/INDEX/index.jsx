import React,{useState } from "react";
import { withRouter } from "react-router";
import SignOut from "../SIGNOUT";
import { connect } from "react-redux";
import SignUp from "../SIGNUP";
import { Tabs, Tab, Alert } from "react-bootstrap";
import "./tabs.styles.scss";
import { ArrowBack,TimesCircle } from "../../../FONTAWESOME/CARTITEM";
import { AlertCustomer } from "../../../BOOTSTRAP/COMPONENTS/ALERTS";
import { hiddenAlertErrorMessage } from "../../../REDUX/ACTIONS/USERACTION";
import { createStructuredSelector } from "reselect";
import {
  hiddenAlertMessageSelector,
  errorMessageSelector,
} from "../../../RESELECT";

function SignPage({
  history,
  hiddenAlertErrorMessageFunc,
  hiddenALert,
  errorMessage,
}) {
const [key ,setKey] = useState('login')

 const handleSelectTab = (k) => {
  hiddenAlertErrorMessageFunc() 
  setKey(k)
} 

  return (
    <div className="m-5 sign__container">
      <p
        className="m-5 font-italic font-weight-bold btn-link text-decoration-none"
        onClick={() => history.goBack()}
      >
        <ArrowBack /> GO BACK
      </p>
      {hiddenALert && (
        <div className="mb-5">
          <AlertCustomer
            variant="danger"
            onClose={() => hiddenAlertErrorMessageFunc()}
            className="w-50 m-auto alert__container"
            dismissible
          >
            <Alert.Heading><TimesCircle className="text-danger"/> You got an error!</Alert.Heading>
            <p>{errorMessage}</p>
          </AlertCustomer>
        </div>
      )}
      <Tabs
        activeKey={key}
        id="uncontrolled-tab-exemple"
        className="justify-content-around tab__sign w-50 m-auto align-items-center"
        onSelect={(k) => handleSelectTab(k)}
      >
        <Tab eventKey="login" title="LOGIN">
          <SignUp />
        </Tab>
        <Tab eventKey="logout" title="LOGOUT">
          <SignOut />
        </Tab>
      </Tabs>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    hiddenAlertErrorMessageFunc: () => {
      dispatch(hiddenAlertErrorMessage());
    },
  };
};

const mapStateToProps = createStructuredSelector({
  hiddenALert: hiddenAlertMessageSelector,
  errorMessage: errorMessageSelector,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignPage)
);
