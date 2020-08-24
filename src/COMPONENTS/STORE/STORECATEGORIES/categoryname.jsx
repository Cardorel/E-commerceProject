import React from 'react';
import { ContainerLayout } from '../../../BOOTSTRAP/LAYOUT';


export let Categoryname = ({children , ...otherProps}) => <ContainerLayout fluid {...otherProps}><h1>{children}</h1></ContainerLayout>