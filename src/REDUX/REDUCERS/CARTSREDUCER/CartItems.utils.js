
//Get the specific cart and put them in payment's page
export const addItemToCart = (cartItems , cartItemAdd) =>{
    //get the existing cart
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemAdd.id);
    
    //Check if it's true or undef
    if(existingCartItem)
    {
        //check if the id are the same and if is true. You want to return the same cartItem but with the different quantity
        return cartItems.map(cartItem => (
            cartItem.id === cartItemAdd.id
            ? {...cartItem , quantity : cartItem.quantity + 1 }
            : cartItem
            )
        )
    }
    //else you want to return the same carts but with the quantity 1;
    return [...cartItems , {...cartItemAdd , quantity: 1}]
}



///Get the 

export const detailPageCartItem = (cartItems) => {
    //const existingCartItem = cartItems.filter(item => item.id === cartItemAdd.id)
    return cartItems;
}


export const clearItemCart = (cartItems , clearCartItem) =>{
    return cartItems.filter( cartItem => cartItem.id !== clearCartItem.id);
}




export const DeleteItemCart = (cartItems , deleteCartItem) =>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === deleteCartItem.id);
    
    //Check if it's true or undef
    if(existingCartItem.quantity >= 1)
    {
        //check if the id are the same and if is true. You want to return the same cartItem but with the different quantity
        return cartItems.map(cartItem => (
            cartItem.id === deleteCartItem.id
            ? {...cartItem , quantity : cartItem.quantity - 1 }
            : cartItem
            )
        )
    }
}