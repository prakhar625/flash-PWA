import React, { Component } from 'react';

// import sub comps
import CardCarousel from './Components/CardCarousel/CardCarousel';
import Metadata from './Components/Metadata/Metadata';

// import styles
import './App.css';

export const words = [
  {
    id:0,
    word:"Gragarious0",
    notes:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, labore.",
  },
  {
    id:1,
    word:"Gragarious1",
    notes:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, labore.",
  },
  {
    id:2,
    word:"Gragarious2",
    notes:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, labore.",
  },
];

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <CardCarousel currentCard={0} />
        <Metadata currentCard={0} />
      </React.Fragment>
    );
  }
}

export default App;
