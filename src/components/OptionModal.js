import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="SelectedOption"
    >
        <h3>SelectedOption</h3>
        <p>{props.selectedOption}</p>
        <button onClick={props.handleClose}>Close</button>
    </Modal>
);

export default OptionModal;