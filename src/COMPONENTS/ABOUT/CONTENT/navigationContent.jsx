import React from "react";
import {
  ContainerLayout,
  RowLayout,
  ColLayout,
} from "../../../BOOTSTRAP/LAYOUT";

export default function NavigationContent({ children1, children2 }) {
  return (
    <ContainerLayout>
      <RowLayout className="row__navigation__content">
        <ColLayout className="m-5 col__navigation__content">{children1}</ColLayout>
        <ColLayout className="m-5 col__navigation__content">{children2}</ColLayout>
      </RowLayout>
    </ContainerLayout>
  );
}
