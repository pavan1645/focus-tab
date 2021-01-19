import React from 'react';
import PropTypes from 'prop-types';

export default function BackgroundImage({ imageUrl }) {

  document.querySelector('body').style.backgroundImage = `url(${imageUrl})`;

  return (
    <></>
  );
}

BackgroundImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
