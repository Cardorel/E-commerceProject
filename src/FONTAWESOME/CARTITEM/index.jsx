import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart , faArrowLeft , faCartArrowDown , faHeart, faTimesCircle , faTrashAlt , faLock , faArrowRight , faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'


export const CartIcon = ({...otherProps}) => <FontAwesomeIcon {...otherProps} icon={faShoppingCart}/>
export const ArrowBack = ({...otherProps}) => <FontAwesomeIcon {...otherProps} icon={faArrowLeft} />
export const CartArrowDown = ({...otherProps}) => <FontAwesomeIcon {...otherProps} icon={faCartArrowDown}/>
export const Heart = ({...otherProps}) => <FontAwesomeIcon {...otherProps} icon={faHeart}/>
export const DeleteCart = ({...otherProps}) => <FontAwesomeIcon {...otherProps} icon={faTrashAlt}/>;
export const LockCart = ({...otherProps}) => <FontAwesomeIcon {...otherProps} icon={faLock}/>;
export const ArrowwRight = ({...otherProps}) => <FontAwesomeIcon {...otherProps} icon={faArrowRight}/>
export const MapItem = ({...otherProps}) => <FontAwesomeIcon {...otherProps} icon={faMapMarkerAlt}/>
export const TimesCircle = ({...otherProps}) => <FontAwesomeIcon {...otherProps} icon={faTimesCircle}/>