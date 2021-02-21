import React, {useEffect} from 'react';
import styled from 'styled-components';
import Solution from './Solution/Solution';

import WeddingProduceImg from  "../../assets/images/wedding-produce.jpg";
import WeddingProduceImgSP from  "../../assets/images/wedding-produce-sp.jpg";
import WeddingPhotoImg from  "../../assets/images/wedding-photo-works.jpg";
import WeddingPhotoImgSP from  "../../assets/images/wedding-photo-works-sp.jpg";
import Footer from '../Footer/Footer';
import Header from '../Top/Header/Header';
import ContactButton from '../ContactButton/ContactButton';

import WeddingProducePDF from "../../assets/PDFs/produce.pdf";
import WeddingPhotoPDF from "../../assets/PDFs/photo.pdf";

const ContentsWrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  font-family: 'ヒラギノ明朝 ProN';
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 950px;
  height: 550px;
  margin: 0 auto;
  background-color: #191817;
  color: white;
  font-size: 72px;
  font-family: 'AWConqueror Std Didot';
  @media only screen and (max-width: 440px) {
    font-size: 42px;
  }
`;
const PriceDetails = styled.p`
  @media only screen and (max-width: 440px) {
    font-size: 12px;
  }
`;

const InstagramSectionWrapper = styled.div`
  margin: 110px 0 110px 0;
`;

//put a component in Fee

function Fee() {
  return (
    <div>
      <div>プロデュースfee: ¥250,000 yen (税別)</div>
      <PriceDetails>※ディレクションのみの金額です。<br />総額はヒアリング後、大体のお見積もりをご提示いたします。</PriceDetails>
    </div>
  )
}

function WeddingPhotoFee() {
  return (
    <div>
      <div>
        <li>【ロケーションフォト撮影(国内)】</li>
        <li>スタジオフォト：¥230,000yen〜(税別)</li>
      </div>
      <div>基本プラン：¥190,000 yen〜(税抜)</div>
      <PriceDetails>[セット内容]<br />
        撮影場所/ヘアメイク/写真データ：100〜200カット/ブーケブートニア<br/>
        ドレス+タキシード：1着/アクセサリー/小物一式<br/>
        ※関東以外のエリアに関しては交通費が発生いたします。
      </PriceDetails>
    </div>
  )
}

export default function Works() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  return (
    <div>
      <Header />
      <Message>Works.</Message>
      <ContentsWrapper>
        <Solution
          title="Wedding Produce"
          id="wedding-produce"
          num="01"
          position="left"
          image={WeddingProduceImg}
          imageSP={WeddingProduceImgSP}
          pdf={WeddingProducePDF}
          description="フリーランスだからこそ実現できる結婚式。屋内ホテルから野外のキャンプ場まで、お二人にあった理想の場所でウエディングをプロデュースします。"
          fee={<Fee />} />
        <Solution
          title="Wedding Photo"
          id="wedding-photo"
          num="02"
          position="right"
          image={WeddingPhotoImg}
          imageSP={WeddingPhotoImgSP}
          pdf={WeddingPhotoPDF}
          description="こだわりの空間や自然豊かな場所で撮影を行うウエディングフォト。結婚式や前撮り、ウエデインングフォトでもご利用いただけます。"
          fee={<WeddingPhotoFee />} />
        <InstagramSectionWrapper>
          <div class="elfsight-app-f9a274dc-c5bb-444d-b879-ecac1da0f37d"></div>
        </InstagramSectionWrapper>
      </ContentsWrapper>
      <ContactButton />
      <Footer />
    </div>
  )
}