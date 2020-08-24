import React from "react";
import BackgroundPageContainer from "../DETAILPRODUCTPAGE/CONTAINERPAGEBACKGROUND";
import FooterDesign from "../INTERIORDESIGN";
import "./about.styles.scss";
import AboutsContent from "./CONTENT";

export default function AboutPage() {
  return (
    <div className="About__component">
      <BackgroundPageContainer addHeight="add__height__about">
        <AboutsContent />
        <FooterDesign addBackground="addBackground__About"  className="footer__desing__in__about" />
      </BackgroundPageContainer>
    </div>
  );
}
