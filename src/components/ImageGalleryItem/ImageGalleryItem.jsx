import React from 'react';
import PropTypes from 'prop-types';
import { LiGllery } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export function ImageGalleryItem({ id, showModal, smallImg, alt }) {
  return (
    <LiGllery key={id} onClick={showModal}>
      <img src={smallImg} alt={alt} />
    </LiGllery>
  );
}

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  id: PropTypes.string,
  alt: PropTypes.string,
  // showModal: PropTypes.func.isRequired,
};
