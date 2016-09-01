import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import GameStamp from './GameStamp'

export class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedIndex : 0
    }

    this.handlePress = this.handlePress.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.getIndex = this.getIndex.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handlePress)
  }

  componentWillUnMount() {
    window.removeEventListener('keydown')
  }
  
  handleClick(index) {
    return () => {
      this.setState({ selectedIndex: index });
    }
  } 

  getIndex(direction) {
    const value = this.state.selectedIndex
    const length = this.props.gameData.data.games.game.length

    switch(direction) {
      case 'left' :
        return value === 0 ? length-1 : value-1
      case 'right' :
        return value === length-1 ? 0 : value+1
      default :
        return value
    }
  }
  
  handlePress(e) {
    if (e.keyCode === 39) {
      //move forward a gameStamp
     this.setState({
        selectedIndex : this.getIndex('right')
      })
    } else if (e.keyCode === 37) {
      //move back a gameStamp
      this.setState({
        selectedIndex : this.getIndex('left')
      })
    }
   
  }

  render() {

    if (!this.props.gameData) {
      return (
        <div>Loading Data</div>
      )
    }

    return (
      <div className='Carousel'>
        { this.props.gameData.data.games.game.map((value, key) => 
          <GameStamp 
            id={key === this.state.selectedIndex ? 'active' : 'hidden' }
            game={value}
            onClick={this.handleClick(key)}
            key={key}
             />) } 
        {/* end  of .map */}
      </div>
    )
  }
}

export default Carousel

