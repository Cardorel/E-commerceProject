import React from 'react';
import {connect} from 'react-redux'
import NavBar from "../NAVBAR";
import "./header.scss";
import { ContainerLayout } from "../../../BOOTSTRAP/LAYOUT";
import MenuContent from "../MENUCONTENT";
import StaticModal from "../../../BOOTSTRAP/COMPONENTS/MODALS";
import { subTotalSelector, currentUSerSelector , hiddenModalSelector} from '../../../RESELECT';




function HeaderContainer({currentUser , hiddenModalLogout , quantityItems , ...otherProps}) {
 
  return (
    <div className="img__header__Bg position-relative">
      <ContainerLayout fluid>
        <NavBar
          About="About"
          Faq="FAQ"
          Store="Store"
          numberItems={quantityItems}
          existUser={currentUser}
        />
          {currentUser && hiddenModalLogout && <StaticModal children="Log out"/>}
        <MenuContent{...otherProps}/>
      </ContainerLayout>
    </div>
  );
} 

const mapStateToProps = state => {
  return {
    currentUser: currentUSerSelector(state),
    hiddenModalLogout : hiddenModalSelector(state),
    quantityItems: subTotalSelector(state),
  }
}


export default connect(mapStateToProps)(HeaderContainer)