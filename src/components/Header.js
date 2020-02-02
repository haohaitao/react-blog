import React, { Component } from 'react';
import { HeaderWrapper } from './style';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';

class Header extends Component {
  state = {
    visible: false,
  };
  handleMenuClick = e => {
    console.log(e)
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">JavaScript</Menu.Item>
        <Menu.Item key="2">PHP</Menu.Item>
      </Menu>
    );
    return (
      <HeaderWrapper>
        <header className="head-page">
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
                  <Dropdown overlay={menu}
                    onVisibleChange={this.handleVisibleChange}>
                      <a className="ant-dropdown-link" href="#">
                        分类<Icon type="down" />
                      </a>
                  </Dropdown>
                </li>
                <li>
                  <Link to="/everyday">
                    每日一图
                </Link >
                </li>
              <li> 
                <Link to="/online_chat">
                    聊天室
                </Link>
                </li>
               <li> 
                 <Link to="/statistics">
                    统计
                </Link>
                </li>
                <li>
                  <Link to="/about">
                    关于
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </HeaderWrapper>
    )
  }
}

export default Header;
