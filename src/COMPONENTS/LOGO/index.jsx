import React from 'react'
import Logo from '../../ASSETS/IMAGES/logoXherlight.svg'
import './logo.styles.scss'

export default function MyLogo () {
    return (
        <div className="my__log">
            <img className="imgLogo" src={Logo} alt="logo" />
        </div>
    )
}