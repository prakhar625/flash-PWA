import React, { Component } from 'react'
import './Card.scss'

export class Card extends Component {
  render() {
    return (
      <div className="card--container">
        <p className="card--title">word</p>
        <h1 className="card--word">{this.props.word}</h1>
      </div>
    )
  }
}

export default Card;
