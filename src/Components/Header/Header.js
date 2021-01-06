import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div>
      <h1>Welcome</h1>
      <div className="header-links-wrapper">
        <div className="header-link"><a href="">Works</a></div>
        <div className="header-link"><a href="">Wedding</a></div>
        <div className="header-link"><a href="">Profile</a></div>
        <div className="header-link"><a href="">Contact</a></div>
      </div>
    </div>
  )
}