import React from 'react'

const GameStamp = ({game}) => {

  const homeTeam = game.home_team_name
  const winningPitcher = game.winning_pitcher.first +' '+ game.winning_pitcher.last
  const losingPitcher = game.losing_pitcher.first +' '+ game.losing_pitcher.last
  const awayTeam = game.away_team_name
  const imgData = game.video_thumbnail
  
  return (
    <div key={game.location}>
      <h4> {awayTeam} @ {homeTeam} </h4>
      <img src={imgData} />
      <h6> Win:{winningPitcher} Loss:{losingPitcher} </h6>
    </div>
  )
}

export default GameStamp