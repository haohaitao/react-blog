import React, { Component } from 'react';
import { HomeWrapper } from './style'
import Home from './components/home'
import Slider from './components/slider'

class HomeMain extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render(){
    return (
      <HomeWrapper>
        <Home/>
        <Slider/>
      </HomeWrapper>
    )
  } 
}

export default HomeMain;
