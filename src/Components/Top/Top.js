import React from 'react';

import Header from './Header/Header';
import Content from './Content/Content';

import Image1 from  "../../assets/images/wedding-produce-top.jpg";
import Image2 from "../../assets/images/wedding-photo.jpg";
import Profile from './Profile/Profile';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

export default function Top() {
  return (
    <div>
      <Header />
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