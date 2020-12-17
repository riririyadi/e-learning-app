import React from "react";
import Modal from "react-modal";

import "../styles/Modal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderTop: "5px solid #772CE8",
  },
};

Modal.setAppElement('body');

export default function CustomModal({ isOpen, onRequestClose, componentToPass }){
  return (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Modal"
    className={{
      base: "modal-base",
      afterOpen: "modal-base_after-open",
      beforeClose: "modal-base_before-close",
    }}
    overlayClassName={{
      base: "overlay-base",
      afterOpen: "overlay-base_after-open",
      beforeClose: "overlay-base_before-close",
    }}
    shouldCloseOnOverlayClick={false}
    closeTimeoutMS={300}
    style={customStyles}
  ><div><div>
    <button
      className="float-right close-button"
      style={{
        border: "none"
      }}
      onClick={onRequestClose}
    >
      x
    </button>
    </div>
    {componentToPass}</div>
  </Modal>)
};
