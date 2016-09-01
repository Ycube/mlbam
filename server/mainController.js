import request from 'request'
const rootURL = 'http://gdx.mlb.com/components/game/mlb'

export default {
  mainGet : (req, res, next) => {
    const { query: { year, month, day } } = req;

    if (!year || !month || !day) {
      next(new Error('must send year, month, and day'));
    } else {
      const url = `${rootURL}/year_${year}/month_${month}/day_${day}/master_scoreboard.json`
      
      request(url, (err, body, response) => {
        if (err) {
          next(err)
        } else {
          res.send(response)
        }
      });
    }
  }
}