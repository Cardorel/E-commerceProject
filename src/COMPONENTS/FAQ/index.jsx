import React from "react";
import BackgroundPageContainer from "../DETAILPRODUCTPAGE/CONTAINERPAGEBACKGROUND";
import HeaderFAQ from "../FAQ/CONTENT/header";
import "./faq.styles.scss";
import ContainerFaq from "./CONTENT";
import FooterFAQ from "./CONTENT/footerFAQ";

export default function FaqPage() {
  return (
    <div className="faq__page">
      <BackgroundPageContainer addHeight="add__height__faq">
        <HeaderFAQ />
        <div className="container-fluid __cont__faq">
          <ContainerFaq />
        </div>
        <FooterFAQ />
      </BackgroundPageContainer>
    </div>
  );
}
