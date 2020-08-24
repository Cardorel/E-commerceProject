import React from 'react';
import {connect} from 'react-redux'
import HeaderContainer from '../HEADER/HEADERCONTAINERS'
import CartItems from '../CARTITEMS'
import Testimonials from '../TESTIMONIALS'
import FooterDesign from '../INTERIORDESIGN'
import { createStructuredSelector } from 'reselect';
import { selectIsDataFetching } from '../../RESELECT';
import { WithSpinner } from '../WITHSPINNER';


const CartItemsCollections = WithSpinner(CartItems)

 function HomePage({isLoading , ...otherProps}){
    return (
        <div className="position-relative">
            <HeaderContainer {...otherProps}/>
            <CartItemsCollections isLoading={isLoading} {...otherProps}/>
            <Testimonials/>
            <FooterDesign {...otherProps}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsDataFetching
})

export default connect(mapStateToProps)(HomePage);