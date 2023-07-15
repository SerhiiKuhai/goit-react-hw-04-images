import React, { useEffect } from 'react';
import { Overlay, ModalImg } from 'components/Modal/Modal.styled';
import PropTypes from 'prop-types';

export function Modal({ closeModal, modalImage }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalImg>
        <img src={modalImage} alt={modalImage} />
      </ModalImg>
    </Overlay>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
};
