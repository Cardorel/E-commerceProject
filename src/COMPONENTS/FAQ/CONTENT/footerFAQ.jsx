import React from 'react'
import { ContainerLayout, RowLayout, ColLayout } from '../../../BOOTSTRAP/LAYOUT'
import { ImageLayout } from '../../../BOOTSTRAP/COMPONENTS/IMAGES'
import FooterLeft from './footerLeft'

export default function FooterFAQ() {
    return (
        <div>
            <ContainerLayout fluid>
                <RowLayout className="row__footer__">
                    <ColLayout xs={3} className="p-0 m-0 col__footer__">
                        <ImageLayout src="https://i.ibb.co/pbZNwzq/photo-of-plants-on-the-table-105058.jpg" className="img__footer__faq" alt="footerFaq"/>
                    </ColLayout>
                    <ColLayout xs={9} className="p-0 col__map__footer m-0 bg-light">
                        <FooterLeft/>
                    </ColLayout>
                </RowLayout>
            </ContainerLayout>
        </div>
    )
}
