import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionItems from "./CollectionItems";
import { shopDataSelector } from "../../RESELECT";
import SelectifCartItems from "../BESTSELLERS/SelectifCartItems";

function CartItems({ itemsCart }) {
  return (
    <div className="ml-5 mr-5 cart__item__Collection__Container">
      <div className="best__seller__Container__Home__Comp">
         <SelectifCartItems textColor="text-light"/>
      </div>
      <div className="collectionItems">
        {itemsCart.map((item) => (
          <CollectionItems
            key={item.id}
            title={item.title}
            items={item.items}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  itemsCart: shopDataSelector,
});

export default connect(mapStateToProps)(CartItems);
