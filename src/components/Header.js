import React, { Component } from 'react';
import { HeaderWrapper } from './style'
import {Link} from 'react-router-dom'

class Header extends Component {
  render(){
    return (
      <HeaderWrapper>
        <header className="head-page">
          <div className="container">
            <div className="home left">
              <i className="el-icon-cherry"/>
              <Link to="/">个人主页</Link>
            </div>
            <div className="nav-right">
              <ul className="nav-far">
                <Link to="/">
                  <li>
                    <i type="ios-home"/>首页
                  </li>
                </Link>
                <Link  to="/everyday">
                  <li>
                    <i type="ios-link" style={{fontWeight: 'bold'}}/>每日一图
                  </li>
                </Link >
                <Link  to="/online_chat">
                  <li>
                    <i type="ios-link" style={{fontWeight: 'bold'}}/>聊天室
                  </li>
                </Link>
                <Link to="/statistics">
                  <li>
                    <i type="md-heart"/>统计
                  </li>
                </Link>
                <Link to="/about">
                  <li>
                    <i type="md-heart"/>关于
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </header>
      </HeaderWrapper>
    )
  } 
}

export default Header;
