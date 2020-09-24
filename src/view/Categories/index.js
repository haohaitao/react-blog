import React, { Component } from 'react';
import { MainWrapper } from './style';
import Cate from './components/cate';
import Slider from '../../components/Slider';
import { connect } from 'react-redux';
import * as actionCreators from '../../components/store/actionCreators';

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData:[]
    }
  }
  
  render() {
    return (
      <MainWrapper>
        <Cate></Cate>
        <Slider></Slider>
      </MainWrapper>
    );
  }

  componentDidMount(){
    document.title = "分类 - 郝海涛的个人网站"
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

export default connect(mapState, mapDispatch)(Categories);
