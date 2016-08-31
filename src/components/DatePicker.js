import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { fetchMaster } from '../actions/index'
import Carousel from './Carousel'

export class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = null
  }

  

  componentWillMount() {
    //TODO: change this to fetch todays date
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    today = [mm,dd,yyyy];
    
    this.props.fetchMaster(today)
  }


  handleSubmit() {
    // TODO: when user picks new dates
  }


  render() {
    return (
      <div>
        {/*<h3> Date Picker Component</h3>
                <div> TODO: add a calendar/form </div>*/}
        <Carousel gameData={this.props.masterData}/>
      </div>
    )
  }
} 

function mapStateToProps({ masterData }) {
  return { masterData }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMaster }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)