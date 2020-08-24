import React from 'react';
import {Link} from 'react-router-dom'
import { ContainerLayout, RowLayout, ColLayout } from '../../BOOTSTRAP/LAYOUT';
import './footer.styles.scss'
import MyLogo from '../LOGO';
export default function FooterPage() {
    return (
        <div className="footer__container">
            <ContainerLayout fluid>
            <RowLayout>
               <ColLayout sm="4" className="col__footer__page">
                  <Link to="/" className="logo__footer"><MyLogo/></Link>
               </ColLayout>
               <ColLayout sm="1" className="col__footer__page">
                   <Link to="/store" className="text-black-50">Store</Link>
               </ColLayout>
               <ColLayout sm="1" className="col__footer__page">
                   <Link to="/about" className="text-black-50">About</Link>
               </ColLayout>
               <ColLayout sm="1"className="col__footer__page">
                   <Link to="/faq" className="text-black-50">FAQ</Link>
               </ColLayout>
               <ColLayout sm="5" className="text-right col__footer__page">
                   <h5 className="text-black-50">Copyright 2020 Xherbs inc. All rights reserved.</h5>
               </ColLayout>
            </RowLayout>
        </ContainerLayout>
        </div>
    )
}
