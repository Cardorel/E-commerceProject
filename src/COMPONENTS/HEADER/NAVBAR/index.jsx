import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ColLayout, RowLayout } from "../../../BOOTSTRAP/LAYOUT";
import { CartIcon } from "../../../FONTAWESOME/CARTITEM";
import { withRouter } from "react-router";
import "./navbar.scss";
import { ToggleModalLogout } from "../../../REDUX/ACTIONS/LOGOUTACTION";
import MyLogo from "../../LOGO";

function NavBar({
  Store,
  About,
  Faq,
  numberItems,
  history,
  existUser,
  setModalLogout,
}) {
  return (
    <RowLayout className="row__navbar__margin w-100">
      <ColLayout
        xs
        lg="5"
        className="column__navbar text-capitalize font-weight-bold text-light"
      >
        <Link to="/">
          <MyLogo />
        </Link>
      </ColLayout>
      <ColLayout
        xs
        lg="1"
        className="column__navbar font-weight-bold text-light"
      >
        <Link to="/store">{Store}</Link>
      </ColLayout>
      <ColLayout
        xs
        lg="1"
        className="column__navbar logo_header font-weight-bold text-light"
      >
        <Link to="/about">{About}</Link>
      </ColLayout>
      <ColLayout
        xs
        lg="1"
        className="column__navbar font-weight-bold text-light"
      >
        <Link to="/faq">{Faq}</Link>
      </ColLayout>
      {existUser ? (
        <ColLayout
          xs
          lg="3"
          onClick={setModalLogout}
          className=" column__navbar  log__in__col font-weight-bold text-light "
        >
          <span className="border__Rad__displayname">{existUser.displayName.slice(0, 2).toUpperCase()}</span>
        </ColLayout>
      ) : (
        <ColLayout
          xs
          lg="3"
          className="text-right column__navbar font-weight-bold text-light"
        >
        <Link to="/sign"> Log in</Link>
        </ColLayout>
      )}
      <ColLayout
        xs
        lg="1"
        className="text-right column__navbar font-weight-bold text-light"
      >
        <Link to="/payment-process"><CartIcon /> {numberItems}</Link>
      </ColLayout>
    </RowLayout>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setModalLogout: () => {
      dispatch(ToggleModalLogout());
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(NavBar));
