import React, { Component } from 'react';
import { HeaderWrapper } from './style';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {

    return (
      <HeaderWrapper>
        <div className="head-page">
          <div className="container">
            <div className="home left">
              <i className="el-icon-cherry" />
              <Link to="/">个人主页</Link>
            </div>
            <div className="nav-right">
              <ul className="nav-far">
                  <li>
                    <Link to="/">
                    首页
                    </Link>
                  </li>
                <li>
                  <Link to="/categories">
                      分类
                  </Link >
                </li>
                <li>
                  <Link to="/everyday">
                    每日一图
                </Link >
                </li>
                <li>
                  <Link to="/about">
                    关于
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </HeaderWrapper>
      
    )
  }
}

export default Header;
