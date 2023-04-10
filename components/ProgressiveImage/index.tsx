/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IProgressiveImage {
  placeholderSrc: string;
  src: string;
  alt: string;
}

const ProgressiveImage = ({ placeholderSrc, src, alt }: IProgressiveImage) => {
  const [imgSrc, setImgSrc] = useState<string>(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? 'loading' : 'loaded';
  return (
    <Wrapper>
      <img
        {...{ src: placeholderSrc }}
        alt={alt || ''}
        className={`image ${customClass}`}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  .loaded {
    filter: blur(0px);
    transition: filter 0.5s linear;
  }
`;
export default ProgressiveImage;
