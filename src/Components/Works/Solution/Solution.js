import React from 'react';
import styled from 'styled-components';

const SolutionWrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 900px;
  margin: 72px auto;
  flex-direction: ${props => props.position === "right" ? "row-reverse" : "unset"};
  @media only screen and (max-width: 750px) {
    flex-direction: column;
  } 
`;
const SolutionTitleWrapper = styled.h1`
  background-color: black;
  padding: 0 90px;
  color: white;
  position: absolute;
  top: 25%;
  right: ${props => props.position === "left" ? "0" : "auto"};
  left: ${props => props.position === "right" ? "0" : "auto"};
  max-width: 520px;
  @media only screen and (max-width: 750px) {
    padding: 0 40px;
  }
  @media only screen and (max-width: 440px) {
    font-size: 24px;
  }
`;
const DescriptionWrapper = styled.div`
  margin-top: 270px;
  padding: 16px;
  height: 90px;
  text-align: left;
  @media only screen and (max-width: 750px) {
    margin-top: 0;
    padding: 46px;
  }
`;
const FeeWrapper = styled.div`
  padding: 15px;
  text-align: left;
  border: solid 1px;
  margin: 14px;
`;
const SolutionDetailedWrapper = styled.div`
  flex: 0 1 400px;
`;
const SolutionNumber = styled.h2`
  display: inline;
`;
const ImageWrapper = styled.div`
  flex: 0 0 500px;
  @media only screen and (max-width: 750px) {
    width: 100%;
    text-align: ${props => props.position === 'right' ? 'right' : 'left'};
  }
  @media only screen and (max-width: 440px) {
    flex: 0 1 360px;
  }
`;
const Image = styled.img`
  width: 100%;
  @media only screen and (max-width: 750px) {
    width: 70%;
  }
`;


//props
//left or right
export default function Solution(props) {
  return (
    <>
      <SolutionWrapper
        position={props.position}
      >
        <ImageWrapper
          position={props.position}>
          <Image src={props.image} alt=""/>
        </ImageWrapper>
        <SolutionDetailedWrapper>
          <SolutionTitleWrapper
            position={props.position}>
            <SolutionNumber>{props.num}.</SolutionNumber>{props.title}
          </SolutionTitleWrapper>
          <DescriptionWrapper>{props.description}</DescriptionWrapper>
          <FeeWrapper>{props.fee}</FeeWrapper>
        </SolutionDetailedWrapper>
      </SolutionWrapper>
    </>
  )
}