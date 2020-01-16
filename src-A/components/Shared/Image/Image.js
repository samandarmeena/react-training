import React from 'react';
import Proptypes from 'prop-types';

/**
 * Image component
 * It renders an image
 * @param {string} src
 * @param {string} alt
 * @return element
 */
const Image = (props) => {
  const { src, alt } = props;
  return <img src={src} alt={alt} />;
};

// proptype validations for props
Image.propTypes = {
  src: Proptypes.string.isRequired,
  alt: Proptypes.string.isRequired
};

export default Image;
