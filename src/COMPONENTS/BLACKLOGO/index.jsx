import React from 'react'
import BlackLogo from '../../ASSETS/IMAGES/logoXher.svg'
import './blacklogo.styles.scss'

export default function MyBlackLogo () {
    return (
        <div className="my__black__log">
            <img className="imgBlackLogo" src={BlackLogo} alt="Blacklogo"/>
        </div>
    )
}