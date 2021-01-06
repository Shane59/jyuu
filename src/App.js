import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';

import Image1 from  "./assets/images/wedding-produce-top.jpg";
import Profile from './Components/Profile/Profile';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
