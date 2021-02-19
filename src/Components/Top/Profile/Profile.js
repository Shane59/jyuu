import React from 'react';
import styled from 'styled-components';

import ProfileImgURL from  "../../../assets/images/profile.jpg";

const TitleWrapper = styled.h1`
  margin-top: 200px;
`;
const ProfileWrapper = styled.div`
  display: flex;
  padding: 24px 0;
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
  position: relative;
  flex: 0 1 410px;
  @media only screen and (max-width: 776px) {
    flex: 0 1 150px;
    margin-top: 36px;
  }
`;
const ProfileDescriptionWrapper = styled.div`
  flex: 0 1 410px;
  @media only screen and (max-width: 776px) {
    padding: 16px;
  }
`;
const Name = styled.h3`
  display: none;
  @media only screen and (max-width: 776px) {
    display: block;
    font-size: 32px;
  }
`;
const ProfileImg = styled.img`
  height: 180px;
  width: auto;
`;
const NamePC = styled.h3`
  position: absolute;
  font-size: 32px;
  top: 108px;
  right: 46px;
  @media only screen and (max-width: 776px) {
    display: none;
  }
`;

export default function Profile(props) {
  return (
    <>
      <TitleWrapper>Profile</TitleWrapper>
      <ProfileWrapper>
        <ImgWrapper>
          <ProfileImg src={ProfileImgURL} alt=""/>
          <NamePC>Minami<br />Takenaka</NamePC>
        </ImgWrapper>
        <ProfileDescriptionWrapper>
          <Name>Minami Takenaka</Name>
          <h4>兵庫県出身</h4>
          <p>大学卒業後、東京へ上京し新卒でイベント会社へ就職。<br/>
            ウエディング事業部にて現場と企画の経験を積み<br/>
            2020年、フリーランスウエディングプランナーとして独立。<br/>
            <br/>
            会場選びから当日のディレクションまで。<br/>
            自分ができるウエディングに必要な要素を一から具現化し、<br/>
            ”結婚式に「目指すべきスタイル」は存在しない”をコンセプトに<br/>
            自由でユニークな結婚式を創ります。
          </p>
        </ProfileDescriptionWrapper>
      </ProfileWrapper>
    </>
  )
}