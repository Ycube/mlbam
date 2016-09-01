import axios from 'axios'
import { stringify } from 'querystring'

const rootURL = 'http://gdx.mlb.com/components/game/mlb'

export const FETCH_MASTER = 'FETCH_MASTER'

export function fetchMaster(params) {
  const [month, day, year] = params
  const qs = stringify({
    month,
    day,
    year
  })
  // const url = `${rootURL}/year_${year}/month_${month}/day_${day}/master_scoreboard.json`
  const url = `/api/masterMLB?${qs}`
  
  const request = axios.get(url)
  
  return {
    type: FETCH_MASTER,
    payload: request
  }
}

