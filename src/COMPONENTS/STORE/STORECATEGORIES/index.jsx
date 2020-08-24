import React from 'react';
import {Link} from 'react-router-dom'
import { ContainerLayout, RowLayout, ColLayout } from '../../../BOOTSTRAP/LAYOUT';
import CartItemsInStore from '../STOREPRODUCTS/STOREALLPRODUCTS'
import './storecategories.styles.scss';

export default function StoreCategories() {
    return (
            <ContainerLayout fluid >
                   <RowLayout className="row__categories">
                        <ColLayout lg={3} className="categories__container h-25">
                              <div className="pt-4 pb-4 category__col__content">
                                 <Link to="/store/orchid">ORCHIDES</Link>
                              </div>
                              <div className="category__col__content">
                              <Link to="/store/calathea">CALATHEAS</Link>
                              </div>
                              <div className="pt-4 pb-4 category__col__content">
                              <Link to="/store/cactus">CACTUSES</Link>
                              </div>
                        </ColLayout>
                        <ColLayout lg={9}>
                              <CartItemsInStore/>
                        </ColLayout>
                   </RowLayout>
            </ContainerLayout>
    )
};
