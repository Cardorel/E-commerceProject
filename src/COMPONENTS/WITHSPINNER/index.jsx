import React from 'react';
import './withspinner.styles.scss'
import Spiner from './spiner';

export const WithSpinner = WrapComponent => {
    const spinner = ({isLoading , ...otherProps}) => (
        isLoading ?
        <Spiner/>
        :
        <WrapComponent {...otherProps} />
    )

    return spinner;
}