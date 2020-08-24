import React from "react";
import {withRouter} from 'react-router';
import { connect } from "react-redux";
import {
  ContainerLayout,
  RowLayout,
  ColLayout,
} from "../../../BOOTSTRAP/LAYOUT";
import { subTotalSelector } from "../../../RESELECT";
import { CartIcon, ArrowBack } from "../../../FONTAWESOME/CARTITEM";
import './headerPaymentPage.styles.scss'

function HeaderPaymentPage({ quantityItems , history }) {
  return (
    <ContainerLayout className="mt-5">
      <RowLayout>
        <ColLayout>
          <p onClick={() => history.push('/')} className="go__to__home">
            <ArrowBack className="Arrow__Back__style"/> <span>Continue shopping</span>
          </p>
        </ColLayout>
        <ColLayout className="text-capitalize font-weight-bold text-dark text-center" >
          Xherbs
        </ColLayout>
        <ColLayout className="text-right font-weight-bold text-dark">
          <CartIcon className="CartIcon__style"/> {quantityItems}
        </ColLayout>
      </RowLayout>
    </ContainerLayout>
  );
}

const mapStateToProps = (state) => {
  return {
    quantityItems: subTotalSelector(state),
  };
};

export default connect(mapStateToProps)(withRouter(HeaderPaymentPage));
