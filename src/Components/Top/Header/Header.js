import React from 'react';
import styled from 'styled-components';

const HeaderLink = styled.div`
  margin: 0 10px 0 10px;
`;
const HeaderLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  background-color: #001011;
  color: white;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
`;

export default function Header() {
  return (
      <HeaderLinksWrapper>
        <HeaderLink><Link href="/works">Works</Link></HeaderLink>
        <HeaderLink><Link href="/wedding">Wedding</Link></HeaderLink>
        <HeaderLink><Link href="/profile">Profile</Link></HeaderLink>
        <HeaderLink><Link href="/contact">Contact</Link></HeaderLink>
      </HeaderLinksWrapper>
  )
}