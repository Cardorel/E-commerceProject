import React from "react";
import { connect } from "react-redux";
import {
  ContainerLayout,
  RowLayout,
  ColLayout,
} from "../../../BOOTSTRAP/LAYOUT";
import { Buttons } from "../../../BOOTSTRAP/COMPONENTS/BUTTONS";
import { LockCart } from "../../../FONTAWESOME/CARTITEM";
import "./checkout.styles.scss";
import { subTotalPriceSelector } from "../../../RESELECT";
import StripePayment from "../../../STRIPE";

function CheckOut({ totalPrice }) {
  return (
    <div>
      <ContainerLayout className="check__out__container">
        <RowLayout className="p-0 m-0">
          <ColLayout className="p-0 m-0">
            <p>Shipping</p>
            <h5>Total</h5>
          </ColLayout>
          <ColLayout className="p-0 m-0 text-right">
            <p>$0.00</p>
            <h5>${totalPrice}</h5>
          </ColLayout>
        </RowLayout>
        <RowLayout className="p-0 m-0 shipping__calculated">
          <p>Shipping and taxes will be calculated at checkout.</p>
        </RowLayout>
        <RowLayout className="p-0 m-0 w-100 stri__payment__row">
          <StripePayment totalPrice={totalPrice}>
            <Buttons variant className="btn__checkout w-100 font-weight-bold">
              Checkout
            </Buttons>
          </StripePayment>
        </RowLayout>
        <RowLayout className="p-0 m-0 secure__by__stripe">
          <p className="m-4 text-muted">
            <span>----------</span> <LockCart /> Secure by Stripe <span>----------</span>
          </p>
        </RowLayout>
      </ContainerLayout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalPrice: subTotalPriceSelector(state),
  };
};

export default connect(mapStateToProps, null)(CheckOut);
