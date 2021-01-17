import React from 'react';
import styled from 'styled-components';

const SolutionWrapper = styled.div`
  display: flex;
  width: 900px;
  margin: 0 auto;
  background-image: url(${props => props.image});
  background-size: 420px auto;
  background-repeat: no-repeat;
  background-position: ${props => props.position};
`;
const DescriptionWrapper = styled.div`
  flex: 0 1 400px;
  margin-top: 310px;
`;
const FeeWrapper = styled.div`
  flex: 0 1 400px;
  height: 390px;
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  z-index: -1;
`;
const SolutionNumber = styled.h2`
  display: inline;
`;


//props
//left or right
export default function Solution(props) {
  return (
    <>
      <SolutionWrapper
        image={props.image}
        position={props.position}
      >
        <DescriptionWrapper>
          <SolutionNumber>{props.num}.</SolutionNumber>{props.description}
        </DescriptionWrapper>
        <FeeWrapper>
          {props.fee}
        </FeeWrapper>
      </SolutionWrapper>
    </>
  )
}