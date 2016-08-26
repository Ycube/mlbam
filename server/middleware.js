import Router from './routes'
import cors from 'cors'
import express from 'express'
import logger from 'morgan';
import { join } from 'path'
import history from 'connect-history-api-fallback'

export default function (app) {
  if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack')
    const webpackConfig = require('../webpack.config')
    const compiler = webpack(webpackConfig)
    const { webpackDevMiddleware, webpackHotMiddleware } = require('./webpackDev')
    app.use(cors())
    app.use(webpackDevMiddleware(webpackConfig, compiler))
    app.use(webpackHotMiddleware(compiler))
  }
  app.use(cors())
  app.use(logger('dev'))
  app.use(express.static(join(__dirname, '../dist')))
  let router = express.Router();

  app.use('/', router)
  Router(router)

  app.use((err, req, res, next) => {
    res.status(500).send({
      error: err.message
    });
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    next(err);
  });
}
