import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import StoreOFCollectionItems from "./storeOFCollectionItems";
import { shopDataSelector } from "../../../../RESELECT";


 function CartItemsInStore({itemsCart}) {
 
  return (
    <div>
      {
        itemsCart
        .map((item) => (
        <StoreOFCollectionItems key={item.id} title={item.title} items={item.items} />
      ))}
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  itemsCart: shopDataSelector,
})

export default connect(mapStateToProps)(CartItemsInStore);