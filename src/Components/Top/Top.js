import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import Content from './Content/Content';

import Image1 from  "../../assets/images/wedding-produce-top.jpg";
import Image2 from "../../assets/images/wedding-photo.jpg";
import Profile from './Profile/Profile';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import TopImgUrl from '../../assets/images/Top-image.jpg';


const TopImgWrapper = styled.div`
  position: relative;
  width: 900px;
  margin: 0 auto;
`;
const TopImg = styled.img`
  width: 900px;
`;

export default function Top() {
  return (
    <div>
      <Header />
      <TopImgWrapper>
        <TopImg src={TopImgUrl} alt="top image"/>
      </TopImgWrapper>
      <Content
        num="01"
        title="wedding produce"
        description="会場の選定から当日のディレクションまで。どんな結婚式にしたいか、新郎新婦二人の気持ち、ご家族の気持ちを丁寧にヒアリングしながら一緒に創りましょう。"
        image={Image1}
        position="left"
      />
      <Content
        num="02"
        title="weddimg photo"
        description="結婚式の前撮りや後撮りに。全国対応可能。ロケーションフォトを中心にプロデュースしています。"
        image={Image2}
        position="right"
      />
      <Profile />
      <Contact />
      <Footer />
    </div>
  )
}