import React, { Component } from 'react';
import { HeaderWrapper } from './style';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from './store/actionCreators'

class Header extends Component {
  render() {
    const { menu_state } = this.props;
    const { menu_changeState } = this.props
    return (
      <HeaderWrapper>
          <div className="container">
            <div className="home-left">
              <i className="el-icon-cherry" />
              <Link to="/">
                <span className="title_left">H</span>
                <span className="title_middle">A</span>
                <span className="title_right">O</span>
              </Link>
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
          {/* 移动端菜单 */}
          <div className={menu_state ? 'mobile_menu_none' : 'mobile_menu_block'}>
              <Icon type="menu" className="mobile_menu animated jackInTheBox" onClick={() => menu_changeState(true)}/>
          </div>
          <div className={menu_state ? 'mobile_menu_block' : 'mobile_menu_none'}>
              <Icon type="rollback" className="animated swing" onClick={() => menu_changeState(false)}/>
              <ul className="mobile_menu_list animated swing">
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
          
      </HeaderWrapper>
      
    )
  }
}

const mapState = state => ({
  menu_state: state.mobile_menu.menu_state
})

const mapDispatch = dispatch => ({
  menu_changeState(value){
      dispatch(actionCreators.is_MenuState(value) )
  }
})

export default connect(mapState, mapDispatch)(Header);

