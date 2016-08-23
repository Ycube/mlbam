import React, { Component } from 'react'

import GameStamp from './GameStamp'

export class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex : 0
    }
  }

  render() {

    if (!this.props.gameData) {
      return (
        <div> Loading Data</div>
      )
    }

    return (
      <div>
        <h3> Carousel Component </h3>
        
        { this.props.gameData.data.games.game.map((value, key) => <GameStamp game={value} key={key} />) }
      </div>
    )
  }
}

export default Carousel

