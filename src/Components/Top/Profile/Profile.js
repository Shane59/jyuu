import React from 'react';
import styled from 'styled-components';

import DummyImg from  "../../../assets/images/wedding-produce-top.jpg";

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
          <h4>Minami Takenaka<br/>竹中南風</h4>
          <h4>兵庫県出身</h4>
          <p>大学卒業後、新卒でイベント会社へ就職。ウエディング事業部にて現場と企画の経験を積み2020年、フリーランスウエディングプランナーとして独立。
            会場選びから当日でディレクションまでの全てを監修。ウエディングに必要な要素を一から具現化し、”結婚式に「目指すべきスタイル」は存在しない”をコンセプトに自由でユニークな結婚式を創ります。
          </p>
        </ProfileDescriptionWrapper>
      </ProfileWrapper>
    </>
  )
}