import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import Axios from 'axios';

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      houseArr: []
    }
  }
  componentDidMount() {
    Axios.get('/api/house').then(result => {
      this.setState({
        houseArr: result.data
      })
    }).catch(err => {
      console.log('there is an error', err)
    })
  }

  render() {
    let mappedHouses = this.state.houseArr.map((current, index) => (
      <House houseArr={this.state.houseArr[index]} />
    ))
    return <div>
      <h1>Dashboard</h1>
      {mappedHouses}
      <Link to='/wizard'>Add New Property</Link>
    </div>
  }
}