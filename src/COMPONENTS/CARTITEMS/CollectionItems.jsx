import React from "react";
import CartItem from "./CartItem";
import { ContainerLayout, RowLayout } from "../../BOOTSTRAP/LAYOUT";

export default function CollectionItems({title , items }) {
  return (
    <ContainerLayout fluid className="m-5 cart__item__collection">
        <RowLayout>
           <h2 className="m-4">{title.toUpperCase()}</h2>
        </RowLayout>
      <RowLayout className="row__cart__item__collection">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
      </RowLayout>
    </ContainerLayout>
  );
}
