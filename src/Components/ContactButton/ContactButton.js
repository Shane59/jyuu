import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 22px;
  margin: 0 auto;
  width: 400px;
  height: 60px;
  background-color: black;
`;


export default function ContactButton() {
  return (
    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfKZH4FKgWFznDUQtjF4mQyCQN4vDjayYbYng8tQe3WyvvW9w/viewform?embedded=true">Contact</Link>
  )
}