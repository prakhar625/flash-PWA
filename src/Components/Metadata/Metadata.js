import React, { Component } from 'react'
import { words } from '../../App';

import './Metadata.scss';


export class Metadata extends Component {
  constructor() {
    super();

    this.state = {}

    this.getWordDetails = this.getWordDetails.bind(this);
  }

  componentDidMount() {
    this.getWordDetails();
  }

  getWordDetails(query = 'gregarious') {
      const url = `https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${query}`;
      return fetch(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          App_id: "f3ad8cd9",
          App_key: "10a813e5da9539745807b61ae1aba788"
        }
      }).then((res) => { console.log(res)}).catch(err => (console.log(err)));

  }

  render() {
    const currentWord = words[this.props.currentCard];
    const { word, notes } = currentWord;
    return (
      <div className="metadata--container">
        <p>The meaning for the current card comes here</p>
        <br />
        <h6>Notes:</h6>
        <h5>{notes}</h5>
      </div>
    )
  }
}

export default Metadata
