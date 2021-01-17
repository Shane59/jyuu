import React from 'react';
import styled from 'styled-components';

import Logo from '../../../assets/Logo.jpg';

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
    </>
  )
}