import React from 'react';
import './App.css';

import { Carousel } from './components/Carousel';

class App extends React.Component {
  state = {
    images: [
      './images/cycling.jpg',
      './images/football.jpg',
      './images/gymnastics.jpg',
      './images/cycling.jpg',
      './images/ice-skating.jpg',
      './images/karate.jpg',
      './images/shooting.jpg',
      './images/tennis.jpg',
      './images/voleyball.jpg',
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