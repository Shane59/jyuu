import React from 'react';
import styled from 'styled-components';

// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
  background-color: #191817;
  padding: 0 90px;
  color: white;
  position: absolute;
  top: 8%;
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
  font-size: 14px;
  margin-top: 120px;
  padding: 16px;
  text-align: left;
  @media only screen and (max-width: 750px) {
    margin-top: 0;
    padding: 46px;
  }
`;
const FeeWrapper = styled.div`
  font-size: 14px;
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
    display: none;
  }
`;
const ImageSP = styled.img`
  display: none;
  @media only screen and (max-width: 750px) {
    display: initial;
    width: 70%;
  }
`;
const MoreInfoWrapper = styled.div`
  text-align: right;
  margin-right: 14px;
`;
const Link = styled.a`
  color: black;
  text-decoration: none;
`;


//props
//left or right
export default function Solution(props) {

  return (
    <>
      <SolutionWrapper
        id={props.id}
        position={props.position}
      >
        <ImageWrapper
          position={props.position}>
          <Image src={props.image} alt=""/>
          <ImageSP src={props.imageSP} alt=""/>
        </ImageWrapper>
        <SolutionDetailedWrapper>
          <SolutionTitleWrapper
            position={props.position}>
            <SolutionNumber>{props.num}.</SolutionNumber>{props.title}
          </SolutionTitleWrapper>
          <DescriptionWrapper>{props.description}</DescriptionWrapper>
          <FeeWrapper>{props.fee}</FeeWrapper>
          <MoreInfoWrapper>
            <Link href={props.pdf} target="blank">more info →</Link>
          </MoreInfoWrapper>
        </SolutionDetailedWrapper>
      </SolutionWrapper>
    </>
  )
}