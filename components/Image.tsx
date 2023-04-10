/* eslint-disable @next/next/no-img-element */

import React from 'react';
import ProgressiveImage from './ProgressiveImage';

interface ImageProps {
  src?: string;
  alt: string;
  className?: string;
}

const Image: Element = ({ src, alt, className }: ImageProps) => (
  <ProgressiveImage
    src={src}
    placeholderSrc='https://i.stack.imgur.com/ATB3o.gif'
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
