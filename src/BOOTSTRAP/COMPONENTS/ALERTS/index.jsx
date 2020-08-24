import React from 'react'
import { Alert } from 'react-bootstrap'

export const AlertCustomer = ({children , ...otherProps}) => <Alert {...otherProps}>{children}</Alert>
