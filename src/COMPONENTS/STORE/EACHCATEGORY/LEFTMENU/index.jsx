import React from 'react';
import {Link} from 'react-router-dom'
import { ContainerLayout, RowLayout, ColLayout } from '../../../../BOOTSTRAP/LAYOUT';
import './leftmenu.styles.scss';
import CollectionForEachCategory from '../ITEM';

export default function LeftMenu({collectionItems}) {
    return (
            <ContainerLayout fluid >
                   <RowLayout className="row__categories" >
                        <ColLayout  className="categories__container h-25">
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
                        <ColLayout xs={8}>
                              <CollectionForEachCategory itemsCart={collectionItems}/>
                        </ColLayout>
                   </RowLayout>
            </ContainerLayout>
    )
}
