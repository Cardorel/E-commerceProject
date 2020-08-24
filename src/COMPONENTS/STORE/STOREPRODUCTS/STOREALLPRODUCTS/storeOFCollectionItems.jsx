import React from "react";
import { ContainerLayout, RowLayout } from "../../../../BOOTSTRAP/LAYOUT";
import StoreItems from "./storeItems";

export default function StoreOFCollectionItems({items }) {
  return (
    <ContainerLayout className="mt-4 container__store__collection">
      <RowLayout className="row__store__collection">
        {
          items
          .map((item) => (
            <StoreItems key={item.id} item={item} />
          ))}
      </RowLayout>
    </ContainerLayout>
  );
}
