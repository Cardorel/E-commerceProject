import React from 'react'
import HeaderAbout from './header';
import './aboutsContent.styles.scss'
import NavAbout from './navAbout';
import { ContainerLayout } from '../../../BOOTSTRAP/LAYOUT';

export default function AboutsContent() {
    return (
        <div>
            <HeaderAbout/>
            <ContainerLayout fluid className="container__for__navigation__about">
                <NavAbout/>
            </ContainerLayout>
            
        </div>
    )
}
