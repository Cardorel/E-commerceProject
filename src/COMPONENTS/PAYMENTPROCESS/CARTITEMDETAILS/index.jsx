import React from 'react';
import {connect} from 'react-redux'
import { cartSelector, subTotalSelector } from '../../../RESELECT';
import CartItemEmpty from './CartItemEmpty';
import CartItemChosen from './CartItemChosen';
import './index.styles.scss'

 function CartItemDetailPayment({addCartItemToPanel , subTotalQuantity}) {
    return (
        <div>
            {
                subTotalQuantity === 0
                ?
                <CartItemEmpty/>
                :
                <CartItemChosen items={addCartItemToPanel}/>
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
      addCartItemToPanel: cartSelector(state),
      subTotalQuantity: subTotalSelector(state)
    }
  }
  
export default connect(mapStateToProps , null)(CartItemDetailPayment);