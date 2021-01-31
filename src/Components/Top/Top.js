import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import Content from './Content/Content';

import Image1 from  "../../assets/images/wedding-produce-top.jpg";
import Image2 from "../../assets/images/wedding-photo.jpg";
import Profile from './Profile/Profile';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Logo from '../../assets/Logo-black.png';

import TopImgUrl from '../../assets/images/Top-image.jpg';


const TopImgWrapper = styled.div`
  display: flex;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  background-image: url(${TopImgUrl});
  height: 560px;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 125px;
  margin: 0 auto;
`;
const MessageWrapper = styled.div`
  text-align: left;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 36px;
`;
const MessageParagraph = styled.div`
  margin: 16px 0;
`;
const MessageContent = styled.div`
  margin-top: 110px;
  h2 {
    overflow: hidden;
    text-align: center;
  }
  h2:before,
  h2:after {
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 30%;
  }
  h2:before {
  right: 0.5em;
  margin-left: -50%;
  }

  h2:after {
    left: 0.5em;
    margin-right: -50%;
  }
`;

export default function Top() {
  return (
    <div>
      <Header />
      <TopImgWrapper>
        <div>
          <LogoImg src={Logo} alt="Logo" />
        </div>
      </TopImgWrapper>
      <MessageContent>
        <h2>Message</h2>
        <MessageWrapper>
          <MessageParagraph>
            時代は変わった。
          </MessageParagraph>
          <MessageParagraph>
            決まり切ったシチュエーションやお決まりの流れ。<br />
            常識やしきたりに惑わされず　自分のこだわりや理想を選択する時代に。
          </MessageParagraph>
          <MessageParagraph>
            誰かの幸せの節目となる日に　誰かを「おめでとう。」とお祝いする場に、<br />
            ”目指すべきスタイル”など存在しないだろう。
          </MessageParagraph>
          <MessageParagraph>
            周りの目を気にして”同じもの”を選ぶ時代ではなく　それぞれが決めた選択やその姿に称賛と拍手を贈る。
          </MessageParagraph>
          <MessageParagraph>
            そんな時間（じかん）のはじまりだ。
          </MessageParagraph>
        </MessageWrapper>
      </MessageContent>
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