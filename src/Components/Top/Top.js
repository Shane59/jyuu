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
  max-width: 950px;
  height: 550px;
  margin: 0 auto;
  overflow: hidden;
  background-image: url(${TopImgUrl});
  background-size: cover;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 205px;
  margin: 0 auto;
`;
const MessageWrapper = styled.div`
  text-align: left;
  max-width: 720px;
  margin: 0 auto 70px;
  padding: 0 36px;
  font-family: 'ヒラギノ明朝 ProN';
`;
const MessageParagraph = styled.div`
  margin: 16px 0;
`;
const MessageContent = styled.div`
  max-width: 950px;
  margin: 40px auto 0;
  text-align: center;
  .title-border-right {
    display: flex;
    align-items: center;
    margin-right: 50%;
    @media only screen and (max-width: 440px) {
      margin-right: 40%;
    }
  }
  .title-border-right:before {
    border-top: 1px solid;
    content: "";
    flex-grow: 1;
  }
  .title-border-right:before {
    margin-right: 1rem;
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
        <h2 className="title-border-right">Message</h2>
        <MessageWrapper>
          <MessageParagraph>
            素敵な時代になった。
          </MessageParagraph>
          <MessageParagraph>
            周りの目を気にして”同じもの”を選ぶ時代ではなく<br />
            それぞれが決めた選択やその姿に称賛と拍手を贈る時代。
          </MessageParagraph>
          <MessageParagraph>
            決まりきったシチュエーションやお決まりの流れ。<br />
            常識やしきたりに惑わされず、<br />
            自分のこだわりや理想を選択する時代に。
          </MessageParagraph>
          <MessageParagraph>
            誰かの幸せな節目となる日に<br />
            誰かを「おめでとう。」とお祝いする場に<br />
            "目指すべきスタイル”など存在しないと胸を張って<br />
            この一瞬を楽しむのだ。
          </MessageParagraph>
        </MessageWrapper>
      </MessageContent>
      <Content
        num="01"
        title="wedding produce"
        description="フリーランスだからこそ実現できる結婚式。屋内ホテルから野外のキャンプ場まで、お二人にあった理想の場所でウエディングをプロデュースします。"
        image={Image1}
        position="left"
      />
      <Content
        num="02"
        title="weddimg photo"
        description="こだわりの空間や自然豊かな場所で撮影を行うウエディングフォト。結婚式や前撮り、ウエデインングフォトでもご利用いただけます。"
        image={Image2}
        position="right"
      />
      <Profile />
      <Contact />
      <Footer />
    </div>
  )
}