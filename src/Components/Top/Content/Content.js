import React from 'react';
import styled from 'styled-components';
import LazyLoad from "react-lazyload";

const ContentsWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 790px;
  height: 600px;
  font-family: 'ヒラギノ明朝 ProN';
  @media only screen and (max-width: 776px) {
    position: unset;
    height: 350px;
    margin: 64px auto 265px;
  }
  @media only screen and (max-width: 440px) {
    position: unset;
    height: 350px;
    margin: 64px auto 205px;
  }
`;
const Image = styled.img`
  height: auto;
  max-width: 100%;
`;
const TitleAndDesc = styled.div`
  position: absolute;
  background-color: #212222;
  color: white;
  max-width: 400px;
  text-align: left;
  z-index: 1;
  padding: 40px;
  right: ${props => props.position === "right" ? "0" : null};
  top: ${props => props.position === "right" ? "190px" : null};
  @media only screen and (max-width: 776px) {
    position: unset;
    margin: 0 auto;
  }
`;
const Title = styled.h2`
  margin-top: 0;
  text-align: center;
  font-family: 'AWConqueror Std Didot';
  @media only screen and (max-width: 776px) {
    display: none;
  }
`;
const TitleSP = styled.h2`
  display: none;
  @media only screen and (max-width: 776px) {
    display: block;
  }
`;
const ImgWrapper = styled.div`
  position: absolute;
  max-width: 100%;
  width: 480px;
  right: ${props => props.position === "left" ? "0" : null};
  top: ${props => props.position === "left" ? "130px" : null};
  z-index: 0;
  @media only screen and (max-width: 776px) {
    position: unset;
    margin: 0px auto;
  }
`;
const Link = styled.a`
  color: white;
  text-decoration: none;
`;
const LinkWrapper = styled.div`
  margin-top: 10px;
  text-align: right;
`;

export default function Content(props) {
  return (
    <ContentsWrapper>
      <TitleSP className="title-for-sp">{props.num}. {props.title}</TitleSP>
      <ImgWrapper
        position={props.position}
      >
        <LazyLoad>
          <Image src={props.image} alt="photo"/>
        </LazyLoad>
      </ImgWrapper>
      <TitleAndDesc
        position={props.position}
      >
        <Title>{props.num}. {props.title}</Title>
        <div>{props.description}</div>
        <LinkWrapper>
          <Link href={props.link} >more　→</Link>
        </LinkWrapper>
      </TitleAndDesc>
    </ContentsWrapper>
  )
}