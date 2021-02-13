import React from 'react';
import styled from 'styled-components';

const ContentsWrapper = styled.div`
  position: relative;
  margin: 144px auto 136px;
  max-width: 710px;
  height: 260px;
  font-family: 'ヒラギノ明朝 ProN';
  @media only screen and (max-width: 776px) {
    position: unset;
    height: 350px;
    margin: 64px auto 205px;
  }
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
  max-width: 400px;
  text-align: left;
  z-index: 1;
  padding: 40px;
  margin-top: ${props => props.position === "right" ? "170px" : "-80px"};
  box-shadow: 0px 0px 12px 5px #3b4449;
  margin-left: ${props => props.position === "right" ? "290px" : null};
  @media only screen and (max-width: 776px) {
    position: unset;
    margin: 0 auto;
  }
`;
const Title = styled.h2`
  margin-top: 0;
  text-align: center;
  font-family: 'AWConqueror Std Didot';
`;
const ImgWrapper = styled.div`
  position: absolute;
  max-width: 100%;
  margin-left: ${props => props.position === "left" ? "360px" : null};
  z-index: 0;
  @media only screen and (max-width: 776px) {
    position: unset;
    margin: 24px auto;
  }
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