import React from "react";
import FooterDesign from "../../../INTERIORDESIGN";
import StoreCategories from "../../STORECATEGORIES";
import { Categoryname } from "../../STORECATEGORIES/categoryname";
import SelectifCartItems from "../../../BESTSELLERS/SelectifCartItems";
import './storecontent.styles.scss'

function StoreContent() {
  return (
    <>
    <Categoryname className="mt-5 mb-5 product__name__all">All Products</Categoryname>
    <StoreCategories/>
    <div className="mb-5">
        <SelectifCartItems textColor="text-dark"/>
    </div>
    <FooterDesign/>
    </>
  );
}


export default StoreContent;
