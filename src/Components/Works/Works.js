import React from 'react';
import styled from 'styled-components';
import Solution from './Solution/Solution';

import DummyImg from  "../../assets/images/wedding-produce-top.jpg";


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
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam explicabo, nam labore ullam sapiente provident dignissimos quisquam tempora quibusdam. Eos iusto nesciunt reiciendis, ipsa numquam aut distinctio doloremque eveniet velit."
          fee={<Fee />} />
      </ContentsWrapper>
    </div>
  )
}