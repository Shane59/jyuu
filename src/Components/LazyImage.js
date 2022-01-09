import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const Image = styled.img`
  height: auto;
  max-width: 100%;
`;

const LazyImage = ({src, alt}) => {
  return (
    <LazyLoad>
      <Image src={src} alt={alt}/>
    </LazyLoad>
  )
}

export default LazyImage;