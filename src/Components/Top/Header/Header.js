import React from 'react';
import styled from 'styled-components';

import Logo from '../../../assets/Logo.jpg';
import TopImgUrl from '../../../assets/images/Top-image.jpg';

const HeaderLink = styled.div`
  margin: 0 25px 0 25px;
`;
const HeaderLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;
const Link = styled.a`
  text-decoration: none;
  color: black;
`;
const LogoImg = styled.img`
  width: 35px;
  margin: 0 25px 0 25px;
`;
const TopImgWrapper = styled.div`
  position: relative;
  width: 900px;
  margin: 0 auto;
`;
const TopImg = styled.img`
  width: 900px;
`;
const Message = styled.div`
  position: absolute;
  top: 430px;
  right: -110px;
  font-size: 72px;
`;

export default function Header() {
  return (
    <>
      <HeaderLinksWrapper>
        <HeaderLink><Link href="/works">Works</Link></HeaderLink>
        <HeaderLink><Link href="/profile">Profile</Link></HeaderLink>
        <LogoImg src={Logo} alt="logo" />
        <HeaderLink><Link href="/fee">Fee</Link></HeaderLink>
        <HeaderLink><Link href="/contact">Contact</Link></HeaderLink>
      </HeaderLinksWrapper>
      <TopImgWrapper>
        <TopImg src={TopImgUrl} alt="top image"/>
        <Message>Welcome.</Message>
      </TopImgWrapper>
    </>
  )
}