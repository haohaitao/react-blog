import React, { Component } from 'react';
import { CateWrapper } from './style'
import Detail from './cateDetail'
import Slider from '../../components/Slider'

class HomeMain extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render(){
    return (
      <CateWrapper>
        <Detail/>
        <Slider/>
      </CateWrapper>
    )
  } 
}

export default HomeMain;
