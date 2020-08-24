import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import { ColLayout , RowLayout} from "../../BOOTSTRAP/LAYOUT";
import { CartArrowDown } from "../../FONTAWESOME/CARTITEM";
import { ImageLayout } from "../../BOOTSTRAP/COMPONENTS/IMAGES";
import { cartsAction } from "../../REDUX/ACTIONS/CARTSACTION";
import { detailCartAction } from "../../REDUX/ACTIONS/DETAILCARTACTION";

function BestSellerContent({ item, setCartItemToPanel, setCurrentCartITem}) {
  const { Plants, Category, Price, Image , id } = item;

  return (
    <RowLayout className="row__best__seller__content">
      <ColLayout className="col__best__seller__content">
        <div className="position-relative">
         <Link to={`/Product/detail/${id}`}>
              <ImageLayout className="w-100 img__Cart__style" src={Image} onClick={() => setCurrentCartITem(item)} rounded />
         </Link>
          <CartArrowDown
            className="cart__Arrow__item"
            onClick={() => setCartItemToPanel(item)}
          />
        </div>
        <div>
          <h4>{Plants}</h4>
          <p>{Category}</p>
          <h4>${parseFloat(Price).toFixed(2)}</h4>
        </div>
      </ColLayout>
    </RowLayout>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCartItemToPanel: (cart) => {
      dispatch(cartsAction(cart));
    },
    setCurrentCartITem : cart => {
      dispatch(detailCartAction(cart))
    }
  };
};

export default connect(null, mapDispatchToProps)(BestSellerContent);
