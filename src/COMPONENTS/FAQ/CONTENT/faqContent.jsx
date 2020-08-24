import React from "react";

export default function FaqContent({
  header,
  paragraph,
  list1,
  list2,
  list3,
  exist,
}) {
  return (
    <div>
      <h3 className="mt-5 mb-3">{header}</h3>
      <p>{paragraph}</p>
      {exist && (
        <ul className="mt-2 mb-5">
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
        </ul>
      )}
      <hr />
    </div>
  );
}
