import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Route} from 'react-router-dom'

export default class Wizard extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      address:'',
      city:'',
      state:'',
      zipcode:null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    let {value, name}= e.target
    this.setState({
      [name]:value
    })
  }
  handleClick = () => {
    axios.post('/api/createHouse', this.state).then(
      
    ).catch(err => console.log('there was and error', err))
    this.props.history.push('/')
  }
  render() {
    return (<div>
      <div><h1>Add New Listing</h1><Link name='Cancel' to='/' >Cancel</Link></div>
      <label>Property Name</label>
      <input type='text' name='name' onChange={this.handleChange} />
      <label>Address</label>
      <input type='text' name='address' onChange={this.handleChange} />
      <div>
        <div>
          <label>City</label>
          <input type='text' name='city' onChange={this.handleChange} />
        </div>
        <div>
          <label>state</label>
          <input type='text' name='state' onChange={this.handleChange} />
        </div>
        <div>
          <label>Zip</label>
          <input type='number' name='zipcode' onChange={this.handleChange} />
        </div>
      </div>
      <div><button name='Complete' onClick={this.handleClick} >Complete</button></div>
    </div>)
  }
}