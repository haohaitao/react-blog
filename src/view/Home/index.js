import React, { Component } from 'react';
import { HomeWrapper } from './style'
import Home from './components/home'
import Slider from '../../components/Slider'
import {Spin } from 'antd'
import store from '../../store';

class HomeMain extends Component {
  constructor(props){
    super(props)
    this.state = (store.getState())
    this.track = this.track.bind(this)
    store.subscribe(this.track)
  }
  track(){
    this.setState(store.getState())
  }
  render(){
    return (
      <HomeWrapper>
        <Spin  tip="Loading..." style={{marginTop: '25%'}} spinning={store.getState().state}>
          <Home/>
          <Slider/>
        </Spin>
      </HomeWrapper>
    )
  } 
}

export default HomeMain;
