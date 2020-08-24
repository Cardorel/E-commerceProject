import React from "react";
import {
  ColLayout,
  ContainerLayout,
  RowLayout,
} from "../../../BOOTSTRAP/LAYOUT";
import './cartItems.styles.scss';

import {Image} from 'react-bootstrap';
import { CartsCategory } from '../CARTSCATEGORY';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
 
export default function CartItmes({children , Plants , Price , Category , url}) {
  return (
    <ContainerLayout className="justify-content-center align-items-center">
      <RowLayout>
         <CartsCategory className="text-light">{children}</CartsCategory>
      </RowLayout>
      <RowLayout>
        <ColLayout xs={7} md={3}>
            <Image className="img__Style__cart" src={url} rounded/>
            <h2>{Plants}</h2>
            <h4>{Category}</h4>
            <h2>${Price}</h2>
        </ColLayout>
      </RowLayout>
    </ContainerLayout>
  );
}
