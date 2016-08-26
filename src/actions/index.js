import axios from 'axios'

const rootURL = 'http://gdx.mlb.com/components/game/mlb'

export const FETCH_MASTER = 'FETCH_MASTER'

export function fetchMaster(param) {

  const year = param[2]
  const month = param[0]
  const day = param[1]

  const url = `${rootURL}/year_${year}/month_${month}/day_${day}/master_scoreboard.json`
  const request = axios.get(url);
  
  return {
    type: FETCH_MASTER,
    payload: request
  }
}

