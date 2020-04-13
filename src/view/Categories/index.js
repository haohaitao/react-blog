import React, { Component } from 'react';
import { MainWrapper } from './style'
import Cate from './components/cate'
import Slider from '../../components/Slider'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData:[]
    }
  }
  componentDidMount(){
    document.title = "分类 - 郝海涛的个人网站"
  }
  render() {
    return (
      <MainWrapper>
        <Cate></Cate>
        <Slider></Slider>
      </MainWrapper>
    );
  }
}

export default Categories;
