import React from 'react';
import './App.css';
import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";
import Image6 from "./images/6.jpg";
import Image7 from "./images/7.jpg";
import Image8 from "./images/8.jpg";


import { Carousel } from './components/Carousel';

class App extends React.Component {
  state = {
    images: [
      Image1,
      Image2,
      Image3,
      Image4,
      Image5,
      Image6,
      Image7,
      Image8
    ],
  };

  render() {
    const { images } = this.state;

    return (
      <div className="App">
        <h1 className="App__header"> Types of sports (in carousel)</h1>
        <Carousel
          images={images}
          imageWidth={130}
          imagesScrolled={1}
          imagesDisplayed={1}
          animationDuration={1000}
        />
      </div>
    );
  }
}

export default App;