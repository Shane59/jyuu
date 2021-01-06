import React from 'react';
import styled from 'styled-components';

import DummyImg from  "../../assets/images/wedding-produce-top.jpg";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ImgWrapper = styled.div`
  flex: 0 1 410px;
`;
const ProfileDescriptionWrapper = styled.div`
  flex: 0 1 410px;
`;
const ProfileImg = styled.img`
  height: 250px;
  width: auto;
`;

export default function Profile(props) {
  return (
    <>
      <h2>Profile</h2>
      <ProfileWrapper>
        <ImgWrapper>
          <ProfileImg src={DummyImg} alt=""/>
        </ImgWrapper>
        <ProfileDescriptionWrapper>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos beatae magni reprehenderit molestias, velit sequi quae natus enim! Impedit amet inventore fugiat odio cum. Quod quae esse voluptatibus molestias?</p>
        </ProfileDescriptionWrapper>
      </ProfileWrapper>
    </>
  )
}