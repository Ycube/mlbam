import React from 'react'

import { style } from '../../style/style.css'

const GameStamp = ( props ) => {
  const { game } = props
  const homeTeam = game.home_team_name
  const winningPitcher = game.winning_pitcher.first +' '+ game.winning_pitcher.last
  const losingPitcher = game.losing_pitcher.first +' '+ game.losing_pitcher.last
  const awayTeam = game.away_team_name
  const imgData = game.video_thumbnail
  
  return (
    <div className='GameStamp' id={props.id} style={style} key={game.location} onClick={props.onClick}>
      <h6> {awayTeam} @ {homeTeam} </h6>
      <img src={imgData} />
      <h6> Win: {winningPitcher} </h6>
      <h6> Loss: {losingPitcher} </h6>
    </div>
  )
}

export default GameStamp