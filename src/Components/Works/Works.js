import React from 'react';
import styled from 'styled-components';
import Solution from './Solution/Solution';

import DummyImg from  "../../assets/images/wedding-produce-top.jpg";
import Image2 from "../../assets/images/wedding-photo.jpg";
import Footer from '../Footer/Footer';


const ContentsWrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`;

//put a component in Fee

function Fee() {
  return (
    <div>
      <li>プロデュースfee: ¥250,000 yen (税抜)</li>
      <p>上記金額は、ディレクションfeeのみの金額です。<br />総額に関してはヒアリング後ご提示させていただきます。</p>
    </div>
  )
}

function WeddingPhotoFee() {
  return (
    <div>
      <div>【ロケーションフォト撮影(国内)】</div>
      <li>・基本プラン：¥190,000 yen〜(税抜)</li>
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
      <h1>Works</h1>
      <ContentsWrapper>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam explicabo, nam labore ullam sapiente provident dignissimos quisquam tempora quibusdam. Eos iusto nesciunt reiciendis, ipsa numquam aut distinctio doloremque eveniet velit.</p>
        </div>
        <Solution
          title="Wedding Produce"
          num="01"
          image={DummyImg}
          description="どんな結婚式にしたいか、新郎新婦二人の気持ち、ご家族の気持ちを丁寧にヒアリングしながら会場の選定から当日のディレクションまで行います。"
          fee={<Fee />} />
        <Solution
          title="Wedding Produce"
          num="02"
          image={Image2}
          description="結婚式の前撮りや後撮りに。全国対応可能。ロケーションフォトを中心にプロデュースしています"
          fee={<WeddingPhotoFee />} />
      </ContentsWrapper>
      <Footer />
    </div>
  )
}