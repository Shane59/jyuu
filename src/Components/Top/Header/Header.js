import React, { useState } from 'react';
import styled from 'styled-components';

import Hamberger from '../../../SVGs/Hamberger';
import Close from '../../../SVGs/Close';

const HeaderLink = styled.div`
  margin: 0 25px 0 25px;
  @media only screen and (max-width: 430px) {
    display: none;
  }
`;
const HeaderLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  height: 100%; //check this later
  @media only screen and (max-width: 430px) {
    .smartphone-menu-wrapper {
      position: fixed;
      top: 0;
      z-index: 1;
      height: 100%;
      width: 100%;
      color: white;
      background-color: black;
    }
    .smartphone-menu-bar {
      display: flex;
      align-items: baseline;
      margin: 10px 0px 0px;
    }
    .close-button {
      margin-left: auto;
      margin-right: 10px;
      fill: white;
    }
    .menu-bar {
      margin: 10px 0;
    }
    .mobile-menu-items-wrapper {
      margin-top: 80px;
      line-height: 2.5;
    }
    .mobile-menu-link {
      text-decoration: none;
      color: white;
    }
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: black;
`;
const HambergerMenuWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 430px) {
    display: block;
    flex: 0 0 auto;
    margin-left: auto;
    margin-right: 10px;
    cursor: pointer;
  }
`;
const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 30px;
`;

export default function Header() {
  const [smartphoneMenuOpen, setSmartphoneMenuOpen] = useState(false);

  const SmartphoneMenu = () => {
    console.log('hiiiiiiiiiiii');
    
    return (
      <div className="smartphone-menu-wrapper">
        <div className="smartphone-menu-bar">
          <div className="close-button" onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}>{<Close />}</div>
        </div>
        <div className="mobile-menu-items-wrapper">
          <UnorderedList>
            <li><Link className="mobile-menu-link" href="/">Home</Link></li>
            <li><Link className="mobile-menu-link" href="/works">Works</Link></li>
            <li><Link className="mobile-menu-link" href="/profile">Profile</Link></li>
            <li><Link className="mobile-menu-link" href="/fee">Fee</Link></li>
            <li><Link className="mobile-menu-link" href="/contact">Contact</Link></li>
            <li onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}><Link className="mobile-menu-link" href="#online-store">ONLINE STORE</Link></li>
            <li onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}><Link className="mobile-menu-link" href="#about">ABOUT</Link></li>
          </UnorderedList>
        </div>
      </div>
    )
  }
  return (
    <>
      <HeaderLinksWrapper>
        <HeaderLink><Link href="/works">Works</Link></HeaderLink>
        <HeaderLink><Link href="/profile">Profile</Link></HeaderLink>
        <HeaderLink><Link href="/fee">Fee</Link></HeaderLink>
        <HeaderLink><Link href="/contact">Contact</Link></HeaderLink>
        <HambergerMenuWrapper onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}>
          {!smartphoneMenuOpen ? <Hamberger className="hamberger" /> : null}
        </HambergerMenuWrapper>
        {smartphoneMenuOpen ? <SmartphoneMenu /> : null}
      </HeaderLinksWrapper>
    </>
  )
}