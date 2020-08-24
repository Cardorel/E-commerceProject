import React from "react";
import "./bestseller.styles.scss";
import GetArrayBestSeller from "./GetArrayBestSeller";

export default function BestSeller({ items }) {
  return (
    <div className="ml-5 mr-5 w-25 best__seller__item__container">
      {items
        .filter((item, index) => index < 1)
        .map((item) => (
          <GetArrayBestSeller key={item.id} item={item} />
        ))}
    </div>
  );
}
