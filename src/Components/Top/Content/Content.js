import React from 'react';
import styled from 'styled-components';

const ContentsWrapper = styled.div`
  position: relative;
  margin: 80px auto 0;
  width: 710px;
  height: 260px;
`;
const Image = styled.img`
  height: 250px;
  width: auto;
`;
const TitleAndDesc = styled.div`
  position: absolute;
  width: 400px;
  text-align: left;
  z-index: 1;
  margin-left: ${props => props.position === "right" ? "360px" : null};
`;
const ImgWrapper = styled.div`
  position: absolute;
  max-width: 200px;
  margin-left: ${props => props.position === "left" ? "360px" : null};
  z-index: 0;
`;

// props = {
//   num: String,
//   title: String,
//   descrption: String,
//   image: String,
//   url: String,
//   position: String
// }

export default function Content(props) {
  return (
    <ContentsWrapper>
      <TitleAndDesc
        position={props.position}
      >
        <h2>{props.num}. {props.title}</h2>
        <div>{props.description}</div>
      </TitleAndDesc>
      <ImgWrapper
        position={props.position}
      >
        <Image src={props.image} alt="photo"/>
      </ImgWrapper>
    </ContentsWrapper>
  )
}