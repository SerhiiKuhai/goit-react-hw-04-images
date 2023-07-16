import React from 'react';
import PropTypes from 'prop-types';
import { LiGllery } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export function ImageGalleryItem({ showModal, smallImg, alt }) {
  return (
    <LiGllery onClick={showModal}>
      <img src={smallImg} alt={alt} />
    </LiGllery>
  );
}

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
