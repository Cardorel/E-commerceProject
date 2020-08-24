import React from "react";
import CartItemChosenComponent from "./CartItemChosen.component";
import {
  ContainerLayout,
  RowLayout,
  ColLayout,
} from "../../../BOOTSTRAP/LAYOUT";
import PromoCode from "../CODEPROMO";
import CheckOut from "../CHECKOUT";

export default function CartItemChosen({ items }) {
  return (
    <ContainerLayout>
      <RowLayout>
        {items &&
          items.map((item) => (
            <CartItemChosenComponent key={item.id} item={item} />
          ))}
      </RowLayout>
      <RowLayout>
        <ColLayout>
          <PromoCode />
        </ColLayout>
        <ColLayout>
          <CheckOut />
        </ColLayout>
      </RowLayout>
    </ContainerLayout>
  );
}
