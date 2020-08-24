import React from "react";
import {connect} from 'react-redux';
import {
  ContainerLayout,
  ColLayout,
  RowLayout,
} from "../../../BOOTSTRAP/LAYOUT";
import { Jumbotron } from "react-bootstrap";
import { ImageLayout } from "../../../BOOTSTRAP/COMPONENTS/IMAGES";
import { DeleteCart } from "../../../FONTAWESOME/CARTITEM";
import { clearItemCartAction, deleteItemCartAction, cartsAction } from "../../../REDUX/ACTIONS/CARTSACTION";

 function CartItemChosenComponent({ item , clearCartItem , removeItem , addItem }) {
  const { Image, Plants, Price, quantity, description } = item;
  return (
    <Jumbotron className="mt-4 w-100 jmb__container">
      <ContainerLayout className="position-relative jumbotron__container" >
        <RowLayout>
          <ColLayout lg="3" className="col__img">
            <ImageLayout src={Image} className="Img__cart__item" />
          </ColLayout>
          <ColLayout lg={9} >
            <div className="product__item__container">
              <div className="product__item__content">
                <h4>{Plants}</h4>
                <p>{description}</p>
              </div>
              <div>
                <DeleteCart onClick={() => clearCartItem(item)} className="text-danger clear__items" />
              </div>
            </div>
            <div className="quantity__price__Container">
              <div className="quantity__price__Content">
                <div className="mr-3 ">
                  <p>Quantity</p>
                  <div className="quantity__content__incr__desc">
                    <span className="btn__incr__descr" onClick={() => quantity === 1 ? "" :  removeItem(item)}>-</span>
                    <span className="font-weight-bold mr-3 ml-3">{quantity}</span>
                    <span className="btn__incr__descr" onClick={() => addItem(item)}>+</span>
                  </div>
                </div>
                <div className="ml-3 price__checkout">
                  <span>${parseFloat(Price).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </ColLayout>
        </RowLayout>
      </ContainerLayout>
    </Jumbotron>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    clearCartItem: cart => {
      dispatch(clearItemCartAction(cart))
    },
    removeItem: cart => {
      dispatch(deleteItemCartAction(cart))
    },
    addItem: cart => {
      dispatch(cartsAction(cart))
    }
    
  }
}

export default connect(null , mapDispatchToProps)(CartItemChosenComponent);