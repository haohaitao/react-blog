import React, { Component } from 'react';
import { MainWrapper } from './style';
import { Link } from 'react-router-dom'
import pic from '../statics/imgs/404.png'

class NotFound extends Component {
  render(){
    return (
      <MainWrapper>
        <div className="content">
          <div className="image-box">
            <img src={pic} alt="404"/>
          </div>
          <h3>你所访问的页面不存在！</h3>
          <p>资源不存在或者没有访问权限，<Link to="/">点击这里</Link>返回首页</p>
        </div>
      </MainWrapper>
    )
  } 
}

export default NotFound;
