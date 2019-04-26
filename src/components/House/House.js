import React, {Component} from 'react'


export default class House extends Component{

  render(){
    return <div><h3>{this.props.houseArr.name} {this.props.houseArr.address} {this.props.houseArr.city} {this.props.houseArr.state} {this.props.houseArr.zip}</h3></div>
  }
}