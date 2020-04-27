import React, { Component } from 'react';
import { HeaderWrapper } from './style';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import * as actionCreators from './store/actionCreators'

class Header extends Component {
  state = {
    mobile_menu:false,
  }
  //打开移动端菜单
  open_menu(){
    this.setState({
      mobile_menu:true
    })
  }
  //关闭移动菜单
  close_menu(){
    this.setState({
      mobile_menu:false
    })
  }
  render() {
    const { menu_state } = this.props;
    const { menu_changeState } = this.props
    return (
      <HeaderWrapper>
          <div className="container">
            <div className="home-left">
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
          {/* 移动端菜单 */}
          <div className={menu_state ? 'mobile_menu_none' : 'mobile_menu_block'}>
              <Icon type="menu" className="mobile_menu" onClick={() => menu_changeState}/>
          </div>
          <div className={menu_state ? 'mobile_menu_block' : 'mobile_menu_none'}>
              <Icon type="rollback" onClick={this.close_menu.bind(this)}/>
              <ul className="mobile_menu_list">
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
  menu_changeState(){
      dispatch(actionCreators.is_MenuState(true) )
  }
})

export default connect(mapState, mapDispatch)(Header);

