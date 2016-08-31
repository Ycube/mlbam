import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { style } from '../../style/style.css'

export class GameStamp extends Component {
  constructor(props) {
    super(props)

  }

  componentDidUpdate() {
    let node = document.getElementById('active')

    node.scrollIntoView()
  }

  render() {
    const { game } = this.props
    const homeTeam = game.home_team_name
    const awayTeam = game.away_team_name
    let imgData = game.video_thumbnail

    // when game has not occured yet
    if (!game.winning_pitcher) {
      imgData = 'http://mlb.mlb.com/documents/8/0/4/111192804/mlb_logo_prod3_1_fqk7toel.svg'
      let timeZone = game.tz_hm_lg_gen
      let timeDate = game.time_hm_lg
      let venue = game.venue
      return (
        <div className='GameStamp' id={this.props.id} style={style} key={game.location}> 
          <h6> {awayTeam} @ {homeTeam} </h6>
          <img src={imgData} />
          <h6> {venue}</h6>
          <h6> {timeDate} {timeZone} </h6>
        </div>
      )
    } else {

      const winningPitcher = game.winning_pitcher.first +' '+ game.winning_pitcher.last
      const losingPitcher = game.losing_pitcher.first +' '+ game.losing_pitcher.last

      return (
        <div className='GameStamp' id={this.props.id} style={style} key={game.location}>
          <h6> {awayTeam} @ {homeTeam} </h6>
          <img src={imgData} />
          <h6> Win: {winningPitcher} </h6>
          <h6> Loss: {losingPitcher} </h6>
        </div>
      )
    }
  }
} 


export default GameStamp