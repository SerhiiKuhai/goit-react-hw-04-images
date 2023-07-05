import React from 'react';
import PropTypes from 'prop-types';
import { LoadButton } from 'components/Button/Button.styled';

export function Button({ onClickButton }) {
  return (
    <LoadButton type="button" onClick={onClickButton}>
      Load more
    </LoadButton>
  );
}

Button.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
