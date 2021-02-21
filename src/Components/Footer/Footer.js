import React, { useEffect } from 'react';
import styled from 'styled-components';

import LineIcon from "../../assets/images/LINE_APP.png";

const FooterWrapper = styled.div`
  font-family: 'AWConqueror Std Didot';
  display: flex;
  justify-content: center;
  margin: 72px auto 0;
  padding: 30px;
  line-height: 24px;
  background-color: #191817;
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
      <MenuWrapper>
        <div><Link href="/">Top</Link></div>
        <div><Link href="/works">Works</Link></div>
        <div><Link href="/#profile">Profile</Link></div>
        <div><Link href="/#contact">Contact</Link></div>
      </MenuWrapper>
      <LinkIconsWrapper>
        <div><Link href="https://line.me/R/ti/p/499rihcl" target="blank"><img className="icon" src={LineIcon} alt=""/></Link></div>
      </LinkIconsWrapper>
    </FooterWrapper>
  )
}