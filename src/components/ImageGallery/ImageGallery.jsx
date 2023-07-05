import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { UlGallery } from 'components/ImageGallery/ImageGallery.styled';

export function ImageGallery({ images, showModal }) {
  return (
    <UlGallery>
      {images.map(image => {
        return (
          <ImageGalleryItem
            showModal={() => showModal(image.largeImageURL)}
            key={image.id}
            smallImg={image.webformatURL}
            alt={image.tags}
          />
        );
      })}
    </UlGallery>
  );
}

ImageGallery.types = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  showModal: PropTypes.func.isRequired,
};
