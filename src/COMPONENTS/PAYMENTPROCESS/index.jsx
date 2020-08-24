import React from "react";
import HeaderPaymentPage from "./HEADER/index";
import CartItemDetailPayment from "./CARTITEMDETAILS/index";
import './paymentprocess.styles.scss';


export default function PaymentPage() {
  return (
    <div className="w-75 m-auto payment__page__container">
        <HeaderPaymentPage />
        <CartItemDetailPayment />
    </div>
  );
}
