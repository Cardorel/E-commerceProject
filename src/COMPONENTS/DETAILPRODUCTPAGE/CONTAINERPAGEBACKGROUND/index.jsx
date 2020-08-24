import React from "react";
import BlackNavBar from '../../NAVBAR/BLACK'
import './containerBackgroundPage.scss'

export default function BackgroundPageContainer({children , addHeight}) {
  return (
    <div className={`detail__page__Cart__Item ${addHeight}`}>
      <div className="detail__page__content">
        <BlackNavBar/>
        {children}
      </div>
    </div>
  );
}
