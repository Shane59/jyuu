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
  font-family: 'AWConqueror Std Didot';
  display: flex;
  justify-content: center;
  padding: 15px;
  height: 100%; //check this later
  @media only screen and (max-width: 430px) {
    .smartphone-menu-wrapper {
      position: fixed;
      top: 0;
      z-index: 1;
      height: 100%;
      width: 100%;
      color: white;
      background-color: #191817;
    }
    .smartphone-menu-bar {
      display: flex;
      align-items: baseline;
      margin: 10px 10px 0px;
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
  color: #191817;
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
    
    return (
      <div className="smartphone-menu-wrapper">
        <div className="smartphone-menu-bar">
          <div className="close-button" onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}>{<Close />}</div>
        </div>
        <div className="mobile-menu-items-wrapper">
          <UnorderedList>
            <li><Link className="mobile-menu-link" href="/" onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}>Top</Link></li>
            <li><Link className="mobile-menu-link" href="/works" onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}>Works</Link></li>
            <li><Link className="mobile-menu-link" href="/#profile" onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}>Profile</Link></li>
            <li><Link className="mobile-menu-link" href="https://docs.google.com/forms/d/e/1FAIpQLSfKZH4FKgWFznDUQtjF4mQyCQN4vDjayYbYng8tQe3WyvvW9w/viewform?embedded=true" onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}>Contact</Link></li>
          </UnorderedList>
        </div>
      </div>
    )
  }
  return (
    <>
      <HeaderLinksWrapper>
        <HeaderLink><Link href="/">Top</Link></HeaderLink>
        <HeaderLink><Link href="/works">Works</Link></HeaderLink>
        <HeaderLink><Link href="/#profile">Profile</Link></HeaderLink>
        <HeaderLink><Link href="https://docs.google.com/forms/d/e/1FAIpQLSfKZH4FKgWFznDUQtjF4mQyCQN4vDjayYbYng8tQe3WyvvW9w/viewform?embedded=true">Contact</Link></HeaderLink>
        <HambergerMenuWrapper onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}>
          {!smartphoneMenuOpen ? <Hamberger className="hamberger" /> : null}
        </HambergerMenuWrapper>
        {smartphoneMenuOpen ? <SmartphoneMenu /> : null}
      </HeaderLinksWrapper>
    </>
  )
}