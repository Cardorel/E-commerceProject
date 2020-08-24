import React from 'react'
import { ContainerLayout, RowLayout } from '../../../BOOTSTRAP/LAYOUT'
import { ArrowBack } from '../../../FONTAWESOME/CARTITEM';
import {withRouter} from 'react-router';

 function CartItemEmpty({history}) {
    return (
        <ContainerLayout className="m-auto">
            <RowLayout className="justify-content-center align-items-center paragraph__text__empty">
                <p>Your cart is empty.</p>
            </RowLayout>
            <RowLayout className="justify-content-center align-items-center mb-2">
                <div className="Btn__Back__To__store" onClick={() => history.push('/store')}>
                    <ArrowBack className="Arrow__Back__Payment__btn"/>
                     <span> Back to store</span>
                </div>
            </RowLayout>
        </ContainerLayout>
    )
}

export default withRouter(CartItemEmpty);