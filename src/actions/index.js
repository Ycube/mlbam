import axios from 'axios'

const rootURL = 'http://gdx.mlb.com/components/game/mlb/year_2016/month_08/day_21/master_scoreboard.json'

export const FETCH_MASTER = 'FETCH_MASTER'

export function fetchMaster() {
  const url = `${rootURL}`
  const request = axios.get(url);
  
  return {
    type: FETCH_MASTER,
    payload: request
  }
}

