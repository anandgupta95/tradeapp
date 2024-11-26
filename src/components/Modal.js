import React from 'react';
import './Modal.css'; // Import CSS for styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render anything if modal is not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
