import React from 'react';
import {Button} from 'react-bootstrap';
import { ArrowwRight } from '../../../FONTAWESOME/CARTITEM';

export const ButtonOutline = ({children ,...otherProps}) => <Button {...otherProps}>{children} <ArrowwRight/></Button>;
export const Buttons = ({children ,...otherProps}) => <Button {...otherProps}>{children}</Button>;