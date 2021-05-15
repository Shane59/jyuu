import React, { useEffect } from 'react';
import styled from 'styled-components';

import LineIcon from "../../assets/images/LINE_APP.png";

const FooterWrapper = styled.div`
  font-family: 'AWConqueror Std Didot';
  background-color: #212222;
  margin: 72px auto 0;
  padding: 30px;
  .copyright {
    font-size: 12px;
    margin-top: 30px;
    color: white;
  }
`;
const FooterContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  line-height: 24px;
`;
const MenuWrapper = styled.div`
  flex: 0 1 200px;
  text-align: left;
`;
const LinkIconsWrapper = styled.div`
  flex: 0 1 200px;
`;
const Link = styled.a`
  color: white;
  text-decoration: none;
  .icon {
    width: 30px;
  }
`;

export default function Footer() {

  return (
    <FooterWrapper>
      <FooterContentsWrapper>
        <MenuWrapper>
          <div><Link href="/">Top</Link></div>
          <div><Link href="/works">Works</Link></div>
          <div><Link href="/#profile">Profile</Link></div>
          <div><Link href="https://docs.google.com/forms/d/e/1FAIpQLSfKZH4FKgWFznDUQtjF4mQyCQN4vDjayYbYng8tQe3WyvvW9w/viewform?embedded=true">Contact</Link></div>
        </MenuWrapper>
        <LinkIconsWrapper>
          <div><Link href="https://line.me/R/ti/p/@499rihcl" target="blank"><img className="icon" src={LineIcon} alt=""/></Link></div>
        </LinkIconsWrapper>
      </FooterContentsWrapper>
      <div className="copyright">© 2021 MinamiTakenaka Wedding All Rights Reserved</div>
    </FooterWrapper>
  )
}