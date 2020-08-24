import { createSelector } from "reselect";

const COLLECTION_TITLE_MAP = {
  orchid: "orchid",
  calathea: "calathea",
  cactus: "cactus"
}


//All cart items

const cartItemSelector = (state) => {
  return state.cartItems;
};

//Curent user

const userSelector = (state) => {
  return state.user;
};

//Shop
const shopDataSelect = (state) => {
  return state.data;
};


//detail cart item

const detailcartSelect = state => {
  return state.detailCart;
}

//Error message selector

const errorMessageSelect =  state => {
  return state.user
}


//Error Message create selector
export const errorMessageSelector = createSelector([errorMessageSelect] , message => message.errorMessage)

//Hidden alert message selector
export const hiddenAlertMessageSelector = createSelector([errorMessageSelect] , hidden => hidden.hiddenAlertErrorMesssage)


//Selector to get all data or collection in firestore

export const shopDataSelector = createSelector([shopDataSelect], (data) => data.data);


//Selector for the category

export const eachCategorySelector = collectionUrlParams => createSelector([shopDataSelector] , collections => collections ? collections.find(collection => collection.title === COLLECTION_TITLE_MAP[collectionUrlParams]) : null)


//Create the selector for the detail page

export const detailCartSelector = createSelector([detailcartSelect] , cart => cart);

//Selector to know if we get the data or not

export const selectIsDataFetching = createSelector(
  [shopDataSelect] , 
  data => data.loading
)

//Selector for the currentUser to know if the user is present or not

export const currentUSerSelector = createSelector([userSelector], (user) => {
  return user.currentUser;
});

//Selector to hidden our modal

export const hiddenModalSelector = createSelector([userSelector], (user) => {
  return user.logoutUser;
});

//Selector the Cart items clkicked by the user

export const cartSelector = createSelector([cartItemSelector], (item) => {
  return item.carts;
});

//Selector to know the quantity and which item to send back

export const subTotalSelector = createSelector([cartSelector], (cartItem) => {
  return cartItem.reduce(
    (accumulateTotal, item) => accumulateTotal + item.quantity,
    
    0
  );
});

//Selector to know the price total selected by the user.

export const subTotalPriceSelector = createSelector(
  [cartSelector],
  (cartItem) => {
    return cartItem.reduce(
      (accumulate, item) => accumulate + item.quantity * item.Price,
      0
    );
  }
);
