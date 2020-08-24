import React from "react";
import { connect } from "react-redux";
import { ContainerLayout , RowLayout} from "../../BOOTSTRAP/LAYOUT";
import { createStructuredSelector } from "reselect";
import { shopDataSelector } from "../../RESELECT";
import BestSeller from ".";
import {Heart} from '../../FONTAWESOME/CARTITEM'

function SelectifCartItems({ itemsCart , textColor }) {
  return (
    <ContainerLayout fluid className="container__select__item">
      <RowLayout className="ml-5">
        <h2 className={`mb-4 ${textColor}`}>
          <Heart /> BEST SELLERS
        </h2>
      </RowLayout>
      <div className="best__seller__container">
      {itemsCart.map((item) => (
        <BestSeller key={item.id} items={item.items} />
      ))}
      </div>
    </ContainerLayout>
  );
}

const mapStateToProps = createStructuredSelector({
  itemsCart: shopDataSelector,
});

export default connect(mapStateToProps)(SelectifCartItems);
