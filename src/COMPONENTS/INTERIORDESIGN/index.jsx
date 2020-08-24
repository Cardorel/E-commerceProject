import React from "react";
import { Link } from "react-router-dom";
import { RowLayout, ColLayout, ContainerLayout } from "../../BOOTSTRAP/LAYOUT";
import { ImageLayout } from "../../BOOTSTRAP/COMPONENTS/IMAGES";
import { ButtonOutline } from "../../BOOTSTRAP/COMPONENTS/BUTTONS";
import "./interiordesign.styles.scss";

export default function FooterDesign({
  history,
  addBackground,
  ...otherProps
}) {
  return (
    <ContainerLayout fluid>
      <RowLayout>
        <ColLayout className="p-0 w-100 Col__interior__style">
          <ImageLayout
            className="w-100 h-100 img__interior__design"
            src="https://i.ibb.co/pbZNwzq/photo-of-plants-on-the-table-105058.jpg"
            alt="close-up-photography-of-roses-1167050"
          />
        </ColLayout>
        <ColLayout
          className={`p-0 w-100 Col__interior__style position-relative ${addBackground}`}
        >
          <div className="Col__interior__content__style w-100">
            <ImageLayout
              className="w-100 h-100  img__interior__design"
              src="https://i.ibb.co/56JnLB9/close-up-photography-of-roses-1167050.jpg"
              alt="photo-of-plants-on-the-table-105058"
            />
            <div className="paragraphs__design__Contenair">
              <div className="paragraphs__design__Content">
                <h1 className="font-weight-bolder">
                  A new home interior for summer
                </h1>
                <h6 className="mt-3 mb-5">from $149.99</h6>
                <div className="btn__discover__container">
                  <ButtonOutline
                    variant="outline-light"
                    className="pl-4 font-weight-bold pt-2 pb-2 pr-4 btn__discover"
                  >
                    <Link to="/store">Discover </Link>
                  </ButtonOutline>
                </div>
              </div>
            </div>
          </div>
        </ColLayout>
      </RowLayout>
    </ContainerLayout>
  );
}
