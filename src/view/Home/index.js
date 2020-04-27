import React, { Component } from 'react';
import { HomeWrapper } from './style'
import Home from './components/home'
import Slider from '../../components/Slider'
import {Spin } from 'antd'
import { connect } from 'react-redux'

class HomeMain extends Component {
  componentDidMount(){
    document.title = "郝海涛的个人网站 - Hao HaiTao's Personal Website"
  }
  render(){
    const { loading } = this.props;
    return (
      <HomeWrapper>
        <Spin  tip="Loading..." style={{marginTop: '25%'}} spinning={loading}>
          <Home/>
          <Slider/>
        </Spin>
      </HomeWrapper>
    )
  } 
}

const mapState = state => ({
  loading: state.home_loading.loading_state
})

const mapDispatch = dispatch => ({
})

export default connect(mapState, mapDispatch)(HomeMain);
