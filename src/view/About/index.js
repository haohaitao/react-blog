import React, { Component } from 'react';
import {Wrapper} from './style';
import { connect } from 'react-redux';
import * as actionCreators from '../../components/store/actionCreators';

class About extends Component {

  render() {
    return (
      <Wrapper>
      <div className="content animated rollIn">
          <p><img src="https://www.haoht123.com/wp-content/uploads/2019/04/about20190403.jpg" alt="关于"  width="690" height="388" srcSet="https://www.haoht123.com/wp-content/uploads/2019/04/about20190403.jpg 690w, https://www.haoht123.com/wp-content/uploads/2019/04/about20190403-300x169.jpg 300w" sizes="(max-width: 690px) 100vw, 690px" /></p>
          <h2>关于本站</h2>
          <p>主要用到的技术：create-react-app + react +  react-router-dom + react-redux + redux-thunk + axios + antd</p>
          <p>代码已开源，页脚有github的入口，欢迎交流，共同学习</p>
          <h2>关于博主</h2>
          <p>曾梦想仗剑走天涯，看一看世界的繁华，后来工作太忙没去。</p>
          <h2>送给自己</h2>
          <p>你好哇，hht。</p>
          <p>虽然生活总是不尽人意，但是活着就有希望！</p>
          <p>困难像弹簧，你弱它就强！</p>
          <h2>联系方式</h2>
          <p>Email：haohaitao28#163.com  #换@</p>
          <p>微信：hht28_</p>
      </div>
  </Wrapper>
    )
  }

  componentDidMount(){
    document.title = "关于 - 郝海涛的个人网站"
    const { menu_changeState } = this.props;
    menu_changeState();
  }
}

const mapState = state => ({
})

const mapDispatch = dispatch => ({
  menu_changeState(value){
      dispatch(actionCreators.is_MenuState(value) )
  }
})

export default connect(mapState, mapDispatch)(About);