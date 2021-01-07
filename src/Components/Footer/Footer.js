import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1050px;
  margin: 0 auto;
  padding: 30px;
  line-height: 24px;
`;
const MenuWrapper = styled.div`
  flex: 0 1 200px;
  text-align: left;
`;
const LinkIconsWrapper = styled.div`
  flex: 0 1 200px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <MenuWrapper>
        <div><a href="">Works</a></div>
        <div><a href="">Wedding</a></div>
        <div><a href="">Profile</a></div>
        <div><a href="">Contact</a></div>
      </MenuWrapper>
      <LinkIconsWrapper>
        <div><a href="">icon</a></div>
        <div><a href="">icon</a></div>
      </LinkIconsWrapper>
    </FooterWrapper>
  )
}