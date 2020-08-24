import React from "react";
import { connect } from "react-redux";
import "./blacknavbar.styles.scss";
import BlackNavBarContent from "../../HEADER/NAVBAR/backnavbar";
import { ContainerLayout } from "../../../BOOTSTRAP/LAYOUT";
import {
  currentUSerSelector,
  hiddenModalSelector,
  subTotalSelector,
} from "../../../RESELECT";
import StaticModal from "../../../BOOTSTRAP/COMPONENTS/MODALS";


function BlackNavBar({ currentUser, hiddenModalLogout, quantityItems }) {
  return (
    <div className="black__header__Bg position-relative">
      <ContainerLayout fluid>
        <BlackNavBarContent
          Store="Store"
          About="About"
          Faq="FAQ"
          numberItems={quantityItems}
          existUser={currentUser}
        />
        {currentUser && hiddenModalLogout && <StaticModal children="Log out" />}
      </ContainerLayout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: currentUSerSelector(state),
    hiddenModalLogout: hiddenModalSelector(state),
    quantityItems: subTotalSelector(state),
  };
};

export default connect(mapStateToProps)(BlackNavBar);
