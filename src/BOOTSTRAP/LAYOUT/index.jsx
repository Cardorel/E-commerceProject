import React from 'react';
import {Container , Row , Col} from 'react-bootstrap';

export const ContainerLayout = ({children , ...props}) => <Container {...props}>{children}</Container>;
export const RowLayout = ({children , ...props}) => <Row {...props}>{children}</Row>;
export const ColLayout = ({children , ...props}) => <Col {...props}>{children}</Col>;