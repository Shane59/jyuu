import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 72px auto 0;
  padding: 30px;
  line-height: 24px;
  background-color: black;
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
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <MenuWrapper>
        <div><Link href="/works">Works</Link></div>
        <div><Link href="/wedding">Wedding</Link></div>
        <div><Link href="/profile">Profile</Link></div>
        <div><Link href="/contact">Contact</Link></div>
      </MenuWrapper>
      <LinkIconsWrapper>
        <div><Link href="">icon</Link></div>
        <div><Link href="">icon</Link></div>
      </LinkIconsWrapper>
    </FooterWrapper>
  )
}