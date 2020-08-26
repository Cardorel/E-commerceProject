import React from "react";
import BlackNavBar from '../../NAVBAR/BLACK'
import './containerBackgroundPage.scss'

export default function BackgroundPageContainer({children,overflow}) {
  return (
    <div className={`detail__page__Cart__Item  ${overflow}`}>
      <div className="detail__page__content">
        <BlackNavBar/>
        {children}
      </div>
    </div>
  );
}
