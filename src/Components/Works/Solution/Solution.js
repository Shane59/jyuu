import React from 'react';
import styled from 'styled-components';

const SolutionWrapper = styled.div`
  display: flex;
  position: relative;
  width: 900px;
  margin: 72px auto;
  flex-direction: ${props => props.position === "right" ? "row-reverse" : "unset"};
`;
const SolutionTitleWrapper = styled.h1`
  background-color: black;
  color: white;
  position: absolute;
  top: 25%;
  right: ${props => props.position === "left" ? "0" : "auto"};
  left: ${props => props.position === "right" ? "0" : "auto"};
  width: 520px;
`;
const DescriptionWrapper = styled.div`
  margin-top: 270px;
  padding: 16px;
  height: 90px;
  text-align: left;
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
  flex: 0 1 400px;
`;
const Image = styled.img`
  width: 500px;
`;


//props
//left or right
export default function Solution(props) {
  return (
    <>
      <SolutionWrapper
        position={props.position}
      >
        <ImageWrapper>
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