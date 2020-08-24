import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripePayment = ({children , totalPrice}) => {
    const stripePrice = totalPrice * 100;
    const pubishKey = "pk_test_51H7jyVAb3oI62QlKGGJFmlDWdM67v9jG9yPy2uPsPvV5xrrn1dGLOO1UJC0gAlbwGRpDip1QL0QrV6LkBA7X3c2G002iXIc92O"
    

    const onToken = token => {
        alert(token);
    }


    return (
        <StripeCheckout
          name="Xherbs"
          image="https://stripe.com/img/documentation/checkout/marketplace.png"
          label="Buy the thing now"
          shippingAddress
          description={`Your total is $${totalPrice}`}
          amount={stripePrice}
          stripeKey={pubishKey}
          token = {onToken}
        >
             {children}
        </StripeCheckout>
    );
}

export default StripePayment;
