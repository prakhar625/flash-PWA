import React, { Component } from 'react'

// import card
import Card from '../Card/Card';

import { words } from '../../App';

export class CardCarousel extends Component {
  render() {
    const currentWord = words[this.props.currentCard];
    const { word } = currentWord;

    return (
      <React.Fragment>
        <Card word={word}/>
      </React.Fragment>
    )
  }
}

export default CardCarousel
