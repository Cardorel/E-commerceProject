import React from 'react';
import { ContainerLayout, RowLayout, ColLayout } from '../../BOOTSTRAP/LAYOUT';
import { ImageLayout } from '../../BOOTSTRAP/COMPONENTS/IMAGES';
import ProductDetail from './productDetail';


export default function CartItemContent({item}) {
    const {Image} = item

    return (
        <div className="detail__page__flex__items">
            <ContainerLayout fluid className="m-0 p-0">
                <RowLayout>
                     <ColLayout>
                        <ImageLayout src={Image} className="Img__product__cart__item" rounded/>
                     </ColLayout>
                     <ColLayout>
                     <ProductDetail item={item}/>
                     </ColLayout>
                </RowLayout>
            </ContainerLayout>
        </div>
    )
}


