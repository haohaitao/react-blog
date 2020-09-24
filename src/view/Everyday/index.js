import React, { Component } from 'react';
import { MainWrapper } from './style'
import { connect } from 'react-redux';
import {Spin } from 'antd'
import * as actionCreators from '../../components/store/actionCreators'
import * as action from './store/actionCreators'

class Everyday extends Component {

  render(){
    const { val, loading } = this.props;
    return (
      <MainWrapper className="mobile_everyday animated rollIn">
          <Spin  tip="Loading..." style={{marginTop: '25%'}} spinning={loading}>
              <article className="excerpt" dangerouslySetInnerHTML={{__html:val.content}}></article>
          </Spin>
      </MainWrapper>
    )
  } 

  componentDidMount(){
    const { menu_changeState, get_request } = this.props;
    menu_changeState();
    get_request();
    document.title = "每日一图 - 郝海涛的个人网站"
  }

}

const mapState = state => ({
  val: state.everyday.data,
  loading: state.everyday.loading_state
})

const mapDispatch = dispatch => ({
  menu_changeState(value){
      dispatch(actionCreators.is_MenuState(value) )
  },
  //请求接口
  get_request(){
    dispatch(action.getData())
  }
})


export default connect(mapState, mapDispatch)(Everyday);
