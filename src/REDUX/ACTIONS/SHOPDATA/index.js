import {
  SET_SHOP_DATA,
  LOADING_SHOP_DATA,
  FAILLURE_SHOP_DATA,
} from "../../TYPES";
import { firestore, getCollectionInFireBase } from "../../../FIREBASE";

const onLoadingShopData = () => ({
  type: LOADING_SHOP_DATA,
});

const onFaillureShopData = (error) => ({
  type: FAILLURE_SHOP_DATA,
  payload: error,
});

 const onSuccessShopData= data => ({
  type: SET_SHOP_DATA,
  payload: data,
});


export const fetchShopDataAsync = () => (dispatch) => {
  const collectionRef = firestore.collection("shopCollection");
      dispatch(onLoadingShopData())
  collectionRef.get()
  .then(async (snapshot) => {
    const dataInFireStore = await getCollectionInFireBase(snapshot);
    dispatch(onSuccessShopData(dataInFireStore));
  })
  .catch(err => {
      dispatch(onFaillureShopData(err.message))
  })
};
