import {combineReducers} from 'redux';
import {userReducer} from '../REDUCERS/USERREDUCER'
import { cartsReducer } from '../REDUCERS/CARTSREDUCER';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {shopDataReducer} from '../REDUCERS/SHOPDATA'
import { detailCartReducer } from '../REDUCERS/DETAILCARTREDUCER';


const persitConfig = {
    key: 'root',
    storage,
    whitelist: ['cartItems' , 'detailCart']
}

const Reducers = combineReducers({
    user: userReducer,
    cartItems: cartsReducer,
    data : shopDataReducer,
    detailCart: detailCartReducer,
})

export default persistReducer(persitConfig , Reducers);