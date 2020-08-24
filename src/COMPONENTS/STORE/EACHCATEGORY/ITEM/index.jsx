import React from "react";
import StoreOFCollectionItems from "../../STOREPRODUCTS/STOREALLPRODUCTS/storeOFCollectionItems";

export default function CollectionForEachCategory({ itemsCart }) {
  return (
    <div>
      <StoreOFCollectionItems items={itemsCart} />
    </div>
  );
}
