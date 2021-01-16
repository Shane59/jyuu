import React from 'react';
import styled from 'styled-components';

const ContentsWrapper = styled.div`
  position: relative;
  margin: 80px auto 0;
  width: 710px;
  height: 260px;
  margin-bottom: 136px;
`;
const Image = styled.img`
  height: 250px;
  width: auto;
  filter: grayscale(1);
  :hover {
    transform: scale(1.1);
    transition: transform .4s;
    filter: none;
  }
`;
const TitleAndDesc = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  width: 400px;
  text-align: left;
  z-index: 1;
  padding: 24px;
  margin-top: 46px;
  box-shadow: 0px 0px 12px 5px #3b4449;
  margin-left: ${props => props.position === "right" ? "290px" : null};
`;
const Title = styled.h2`
  margin-top: 0;
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
        <Title>{props.num}. {props.title}</Title>
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