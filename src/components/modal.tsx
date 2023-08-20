import React from 'react';

type ModalProps = {
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};
