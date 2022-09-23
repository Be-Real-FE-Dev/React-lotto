import React from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const Overlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <div>
      {createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById('overlays')
      )}
      {createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById('overlays')
      )}
    </div>
  );
};

export default Modal;
