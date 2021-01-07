import React from 'react';

import Header from './Header/Header';
import Content from './Content/Content';

import Image1 from  "../../assets/images/wedding-produce-top.jpg";
import Profile from './Profile/Profile';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

export default function Top() {
  return (
    <div>
      <Header />
      <Content
        num="01"
        title="title"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque enim magni adipisci facere incidunt beatae harum totam quisquam ab praesentium dignissimos numquam optio quis, voluptates dolorum nisi ea id molestiae!"
        image={Image1}
        position="left"
      />
      <Content
        num="02"
        title="title"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque enim magni adipisci facere incidunt beatae harum totam quisquam ab praesentium dignissimos numquam optio quis, voluptates dolorum nisi ea id molestiae!"
        image={Image1}
        position="right"
      />
      <Profile />
      <Contact />
      <Footer />
    </div>
  )
}