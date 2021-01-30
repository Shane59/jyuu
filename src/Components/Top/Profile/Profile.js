import React from 'react';
import styled from 'styled-components';

import ProfileImgURL from  "../../../assets/images/profile.jpg";

const ProfileWrapper = styled.div`
  display: flex;
  padding-bottom: 24px;
  margin-bottom: 112px;
  justify-content: center;
  background-color: #1E2A2D;
  color: white;
  align-items: center;
  @media only screen and (max-width: 776px) {
    flex-direction: column;
  }
`;
const ImgWrapper = styled.div`
  flex: 0 1 410px;
  @media only screen and (max-width: 776px) {
    flex: 0 1 150px;
    margin-top: 36px;
  }
`;
const ProfileDescriptionWrapper = styled.div`
  text-align: left;
  flex: 0 1 410px;
  @media only screen and (max-width: 776px) {
    padding: 16px;
  }
`;
const Name = styled.h3`
  font-size: 32px;
  font-family: cursive;
`;
const ProfileImg = styled.img`
  height: 180px;
  width: auto;
`;

export default function Profile(props) {
  return (
    <>
      <h1>Profile</h1>
      <ProfileWrapper>
        <ImgWrapper>
          <ProfileImg src={ProfileImgURL} alt=""/>
        </ImgWrapper>
        <ProfileDescriptionWrapper>
          <Name>Minami Takenaka</Name>
          <h4>兵庫県出身</h4>
          <p>大学卒業後、新卒でイベント会社へ就職。ウエディング事業部にて現場と企画の経験を積み2020年、フリーランスウエディングプランナーとして独立。<br/>
            <br/>会場選びから当日でディレクションまでの全てを監修。ウエディングに必要な要素を一から具現化し、”結婚式に「目指すべきスタイル」は存在しない”をコンセプトに自由でユニークな結婚式を創ります。
          </p>
        </ProfileDescriptionWrapper>
      </ProfileWrapper>
    </>
  )
}