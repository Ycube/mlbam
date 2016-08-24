import React, { Component } from 'react'

import GameStamp from './GameStamp'

export class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedIndex : 0
    }

    this.handlePress = this.handlePress.bind(this);
    this.updateIndex = this.updateIndex.bind(this)
  }


  //helper to update the selectedIndex

  updateIndex(value) {
    const length = this.props.gameData.data.games.game.length
    console.log('value:', value)
    if (value < length) {
      return value += 1
    } else if (value > length) {
      return value = 0
    } else {
      return value = 0
    }
    // switch(value) {
      // case value === length : return value = 0
      // case value < length : return value++        
      // case value === 0 : return value+=1
      // default : return value = 0 
    // }
  }

  handlePress() {
    console.log('OLD INDEX: ', this.state.selectedIndex)
    this.setState({
      selectedIndex : this.updateIndex(this.state.selectedIndex)
    })
    console.log('new index: ',this.state.selectedIndex)
  }

  render() {

    if (!this.props.gameData) {
      return (
        <div> Loading Data</div>
      )
    }
    
    return (
      <div className='Carousel'>

        { this.props.gameData.data.games.game.map((value, key) => 
          <GameStamp 
            id={key === this.state.selectedIndex ? 'active' : '' }
            game={value} 
            key={key} 
            onClick={ this.handlePress } />) } 
        {/* end  of .map */}
      </div>
    )
  }
}

export default Carousel

