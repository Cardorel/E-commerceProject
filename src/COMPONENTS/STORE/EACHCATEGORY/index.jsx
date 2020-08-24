import React from "react";
import { connect } from "react-redux";
import { eachCategorySelector } from "../../../RESELECT";
import { Categoryname } from "../STORECATEGORIES/categoryname";
import LeftMenu from "../EACHCATEGORY/LEFTMENU";
import SelectifCartItems from "../../BESTSELLERS/SelectifCartItems";
import './eachcategory.styles.scss'

function EachCategory({ collection }) {
  const { title, items } = collection;

  return (
    <div>
      <Categoryname className="mt-5 mb-5 product__name__category">{title}</Categoryname>
      <LeftMenu collectionItems={items} />
      <div className="mb-5">
        <SelectifCartItems textColor="text-dark" />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    collection: eachCategorySelector(ownProps.match.params.category)(state),
  };
};

export default connect(mapStateToProps)(EachCategory);
