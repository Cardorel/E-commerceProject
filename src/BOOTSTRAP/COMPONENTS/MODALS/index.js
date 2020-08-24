import React from "react";
import {Modal} from 'react-bootstrap';
import './modal.styles.scss'
import { authentification } from "../../../FIREBASE";

export default function StaticModal({children}) {
  return (
    <Modal.Dialog className="logout__modal__style">
      <Modal.Footer className="justify-content-start p-2 logout__hover__style" onClick={() => authentification.signOut()}>
          <p className="font-weight-bold">{children}</p>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
