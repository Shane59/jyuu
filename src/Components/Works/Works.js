import React from 'react';
import styled from 'styled-components';
import Solution from './Solution/Solution';

import WeddingProduceImg from  "../../assets/images/wedding-produce.jpg";
import WeddingPhotoImg from  "../../assets/images/wedding-photo-works.jpg";
import Footer from '../Footer/Footer';
import Header from '../Top/Header/Header';
import ContactButton from '../ContactButton/ContactButton';


const ContentsWrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  height: 600px;
  margin: 0 auto;
  background-color: black;
  color: white;
  font-size: 72px;
  @media only screen and (max-width: 440px) {
    font-size: 42px;
  }
`;

//put a component in Fee

function Fee() {
  return (
    <div>
      <div>プロデュースfee: ¥250,000 yen (税抜)</div>
      <p>上記金額は、ディレクションfeeのみの金額です。<br />総額に関してはヒアリング後ご提示させていただきます。</p>
    </div>
  )
}

function WeddingPhotoFee() {
  return (
    <div>
      <div>【ロケーションフォト撮影(国内)】</div>
      <div>基本プラン：¥190,000 yen〜(税抜)</div>
      <div>[セット内容]</div>
      <p>撮影場所/ドレス/タキシード/アクセサリー/小物一式<br/>ヘアメイク/写真全データ/ブーケブートニア<br/>
        ※関東以外に関しては交通費が発生いたします。
      </p>
    </div>
  )
}

export default function Works() {
  return (
    <div>
      <Header />
      <Message>Works.</Message>
      <ContentsWrapper>
        <Solution
          title="Wedding Produce"
          num="01"
          position="left"
          image={WeddingProduceImg}
          description="どんな結婚式にしたいか、新郎新婦二人の気持ち、ご家族の気持ちを丁寧にヒアリングしながら会場の選定から当日のディレクションまで行います。"
          fee={<Fee />} />
        <Solution
          title="Wedding Produce"
          num="02"
          position="right"
          image={WeddingPhotoImg}
          description="結婚式の前撮りや後撮りに。全国対応可能。ロケーションフォトを中心にプロデュースしています"
          fee={<WeddingPhotoFee />} />
      </ContentsWrapper>
      <ContactButton />
      <Footer />
    </div>
  )
}