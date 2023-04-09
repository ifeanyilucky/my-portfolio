/* eslint-disable @next/next/no-img-element */

import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';

/* --------------------------- Image defaultProps --------------------------- */
const defaultProps = {
  alt: 'ifeanyi',
  className: '',
};
interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

const Image = ({ src, alt, className }: ImageProps) => (
  <ProgressiveImage
    src={src}
    placeholder='https://i.ibb.co/BTvLMXq/Ripple-1-9s-201px.gif'
  >
    {(currentSrc: string, loading: boolean) => (
      <>
        <img
          src={currentSrc}
          alt={alt}
          className={loading ? `${className} loading-img` : className}
        />
        <noscript>
          <img src={src} alt={alt} className={className} />
        </noscript>
      </>
    )}
  </ProgressiveImage>
);

export default Image;
