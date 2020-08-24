import React from 'react';
import {connect} from 'react-redux'
import { Buttons } from '../../BOOTSTRAP/COMPONENTS/BUTTONS'
import { CartIcon } from '../../FONTAWESOME/CARTITEM'
import { cartsAction } from '../../REDUX/ACTIONS/CARTSACTION';

function ProductDetail({item , setCartItemToPanel}) {
    const {Plants , description , Price , Category , Max} = item

    return (
        <div>
            <h1>{Plants}</h1>
            <h4>{Category}</h4>
            <h3>${Price}</h3>
            <p>{Max}</p>
            <h6>{description}</h6>
            <Buttons className="btn__add__to__Cart__detail__Page" onClick={() => setCartItemToPanel(item)}><CartIcon className="Icon__shop__detail__page"/> Add to Cart</Buttons>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
      setCartItemToPanel: cart => {
        dispatch(cartsAction(cart))
      }
    }
  }

  export default connect(null , mapDispatchToProps)(ProductDetail);
