import React, { useContext } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { LayoutContext } from "./NewLayout";
import "../styles/Modal.css";

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -51%)",
    borderRadius: "10px",
    outline: "none",
  },
};

export default function CustomModal({
  isOpen,
  onRequestClose,
  componentToPass,
}) {
  const { isDarkMode } = useContext(LayoutContext);

  return (
    <Modal
      isOpen={isOpen}
      appElement={document.getElementById("root")}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      className={{
        base: `${isDarkMode ? "modal-base-dark-mode" : "modal-base"}`,
        afterOpen: "modal-base_after-open",
        beforeClose: "modal-base_before-close",
      }}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base_after-open",
        beforeClose: "overlay-base_before-close",
      }}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={200}
      style={customStyles}
    >
      <div
        className={`${
          isDarkMode ? "dark-overlay-btn" : "overlay-btn"
        } mt-1 mr-1 float-right centering`}
        style={{ padding: "5px 5px" }}
        onClick={onRequestClose}
      >
        <MdClose size="20px" />
      </div>
      <div>{componentToPass}</div>
    </Modal>
  );
}
