import React from "react";
import { RowLayout, ColLayout } from "../../../BOOTSTRAP/LAYOUT";
import { ButtonOutline } from "../../../BOOTSTRAP/COMPONENTS/BUTTONS";
import "./menucontent.style.scss";

export default function MenuContent({ history }) {
  return (
    <div className="menu__content__center">
      <RowLayout
        xs={1}
        md={1}
        className="justify-content-center align-content-stretch"
      >
        <ColLayout className="text-center text-light column__heading__style font-weight-bold">
          Real, beautiful plants
        </ColLayout>
        <ColLayout className="text-center text-light column__heading__style font-weight-bold">
          right to your door
        </ColLayout>
      </RowLayout>
      <RowLayout className="justify-content-center">
        <ButtonOutline
          variant
          onClick={() => history.push("/store")}
          className="font-weight-bolder btn__style"
        >
          See all plants{" "}
        </ButtonOutline>
      </RowLayout>
    </div>
  );
}
