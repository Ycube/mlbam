import React from 'react'
import { Component } from 'react'

import DatePicker from './DatePicker'
import { style } from '../../style/style.css'

export default class App extends Component {

  render() {

    return (
      <div style={style}>
        <DatePicker />
      </div>
    );
  }
}
