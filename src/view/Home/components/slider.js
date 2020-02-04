import React, { Component } from 'react';
import * as http from '../../../common/http';
import * as config from '../../../common/config';
import { SliderAside } from '../style'

class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentWillMount(){
    // http.getJson('/wp-json/wp/v2/posts?per_page=12','',rootUrl).then( (res)=> {
    //   console.log(res)
    //   if(res.status === 200){
    //     res.data.forEach(item => {
    //       item.title = item.title.rendered
    //       item.excerpt = item.excerpt.rendered
    //     });
    //       this.setState({
    //         listData:res.data
    //       })
    //   }
    // })
  }
  componentDidMount(){
    console.log()
  }

  render(){
    return (
<SliderAside>
  <p>我是侧边栏</p>
  <p>我是侧边栏</p>
  <p>我是侧边栏</p>
  <p>我是侧边栏</p>
  <p>我是侧边栏</p>
  <p>我是侧边栏</p>
  <p>我是侧边栏</p>
  <p>我是侧边栏</p>
  <div className="clear"></div>
</SliderAside>
    );
  } 
}

export default Slider;
