import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { fetchMaster } from '../actions/index'

export class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentWillMount() {
    this.props.fetchMaster()
  }

  render() {
    return (
      <div>
        <h3>Insert Carousel Component</h3>
      </div>
    )
  }
} 

function mapStateToProps({ master }) {
  return { master }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMaster }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)