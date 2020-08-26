import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { detailCartSelector } from "../../RESELECT";
import CartItemContent from "./detailCartItemContent";
import "./detailCartItem.styles.scss";
import { ImageLayout } from "../../BOOTSTRAP/COMPONENTS/IMAGES";
import imgUrl from "../../ASSETS/IMAGES/plants-in-pot-on-wall-2431830.jpg";
import BackgroundPageContainer from "./CONTAINERPAGEBACKGROUND";

function DetailPage({ singleCart }) {
  return (
    <div className="detail__page__container">
    <BackgroundPageContainer overflow="hidden">
      <div>
        <ImageLayout
          src={imgUrl}
          alt="imageLeftDetail"
          className="img__left__detail__page"
        />
        <CartItemContent item={singleCart} />
      </div>
    </BackgroundPageContainer>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  singleCart: detailCartSelector,
});

export default connect(mapStateToProps)(DetailPage);
