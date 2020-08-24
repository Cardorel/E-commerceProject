import React from "react";
import { MapItem } from "../../../FONTAWESOME/CARTITEM";
import { addressLink } from "../CONTENT/Http.address";

export default function FooterLeft() {
  return (
    <div className="mt-5 footer__left__">
      <div className="header__footer__left">
        <h1 className="ml-5">Still have questions?</h1>
        <h1 className="ml-5 mb-5">Contact us.</h1>
      </div>
      <div className="row p-0 m-0">
        <div className="col-3 ml-5 mr-5 mt-1 left__footer__content text-muted">
          <p>226 Str Yurtik I,</p>
          <p>Kiev, UA, Ukraine</p>
          <p>G1K 3A9</p>
          <p className="mt-5 number__phone">+380 50 823-1346</p>
        </div>
        <div className="bar__footer__faq__center" />
        <div className="col-6 ml-5 mr-5 mt-1 right__footer__faq__">
          <p className="text-muted">cardorelngassaki@gmail.com</p>
          <div className="map__Link">
            <a target="_blank" rel="noopener noreferrer" href={addressLink}>
              <MapItem className="map__item" /> On the map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
