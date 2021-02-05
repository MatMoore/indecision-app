import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="SelectedOption"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">SelectedOption</h3>
    <p className="modal__body">{props.selectedOption}</p>
    <button class="button" onClick={props.handleClose}>
      Close
    </button>
  </Modal>
);

export default OptionModal;
