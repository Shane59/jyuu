import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import Content from './Content/Content';

import Image1 from  "../../assets/images/wedding-produce-top.png";
import Image2 from "../../assets/images/wedding-photo.jpg";
import Profile from './Profile/Profile';
import ContactButton from '../ContactButton/ContactButton';
import Footer from '../Footer/Footer';
import Logo from '../../assets/Logo-black.png';

import TopImgUrl from '../../assets/images/Top-image.png';
import TopImgUrlSP from '../../assets/images/Top-image-sp.png';
import NewsList from './NewsList/NewsList';


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
  background-position: center;
  @media only screen and (max-width: 440px) {
    background-image: url(${TopImgUrlSP});
  }
  @media only screen and (min-width: 441px) {
    background-image: url(${TopImgUrl});
  }
`;
const MessageWrapper = styled.div`
  line-height: 44px;
  font-size: 14px;
  text-align: left;
  max-width: 720px;
  margin: 40px auto 70px;
  padding: 0 36px;
  font-family: 'ヒラギノ明朝 ProN';
  @media only screen and (max-width: 440px) {
    line-height: 32px;
    padding: 0 26px;
  }
`;
const MessageParagraph = styled.div`
  margin: 16px 0;
`;
const MessageContent = styled.div`
  max-width: 950px;
  margin: 100px auto 0;
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
  const [newsList, setNewsList] = useState([]);
  const [newsListLoaded, setNewsListLoaded] = useState(false);

  useEffect(() => {
    fetch('https://minamitakenaka.cdn.prismic.io/api/v2')
      .then(res => res.json())
      .then((data) => {
        getNewsData(data.refs[0].ref);
      })
      .catch(console.log)
  }, [])

  const getNewsData = (ref) => {
    fetch(`https://minamitakenaka.cdn.prismic.io/api/v2/documents/search?ref=${ref}`)
    .then(res => res.json())
    .then((data) => {
      data.results.sort((a, b) => {
        var dateA = new Date(a.first_publication_date).getMilliseconds();
        var dateB = new Date(b.first_publication_date).getMilliseconds();
        return dateB - dateA;
      });
      setNewsList(data.results);
      setNewsListLoaded(true);
    })
    .catch(console.log)
  }

  return (
    newsListLoaded ?
      <div>
        <Header />
        <TopImgWrapper>
        </TopImgWrapper>
        <NewsList data={newsList}/>
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
              常識やしきたりに惑わされず、自分のこだわりや理想を選択する時代に。
            </MessageParagraph>
            <MessageParagraph>
              誰かの幸せな節目となる日に、誰かを「おめでとう。」とお祝いする場に<br />
              "目指すべきスタイル”など存在しないと胸を張って<br />
              この一瞬を楽しむのだ。
            </MessageParagraph>
          </MessageWrapper>
        </MessageContent>
        <Content
          num="01"
          title="wedding produce"
          description="常識やしきたりに惑わされず、自分のこだわりや理想を追求する結婚式。屋内ホテルから野外のキャンプ場までお二人にあった理想の場所でウエディングをプロデュースします。"
          image={Image1}
          position="left"
          link="/works/#wedding-produce"
        />
        <Content
          num="02"
          title="wedding photo"
          description="こだわりの空間や自然豊かな場所で撮影を行うウエディングフォト。結婚式や前撮り、ウエデインングフォトでもご利用いただけます。"
          image={Image2}
          position="right"
          link="/works/#wedding-photo"
        />
        <Profile />
        <ContactButton />
        <Footer />
      </div>
    : null
  )
}