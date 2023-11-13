import React from 'react';
import './PopupModal.css'; // Add your styling for the modal

const PopupModal = ({ closeModal }) => {
  return (
    <div className="popup-modal">
      <h2>Congratulations!</h2>
      <p>You are successfully registered.</p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default PopupModal;
