import React, { Component } from 'react';
import * as http from '../common/http';
import { withRouter } from "react-router-dom";
import { SliderAside } from './style'
import { Icon,Affix } from 'antd';

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: [
        {
          id: '1',
          title: ''
        },
        {
          id: '12',
          title: ''
        },
        {
          id: '13',
          title: ''
        },
        {
          id: '14',
          title: ''
        },
        {
          id: '15',
          title: ''
        },
        {
          id: '16',
          title: ''
        },
        {
          id: '17',
          title: ''
        },
        {
          id: '18',
          title: ''
        },
        {
          id: '19',
          title: ''
        },
      ],//存储拿到的热门文章
      cateData: [
        {
          id: '2',
          name: '',
          count: ''
        },
        {
          id: '21',
          name: '',
          count: ''
        },
        {
          id: '22',
          name: '',
          count: ''
        },
        {
          id: '23',
          name: '',
          count: ''
        },
        {
          id: '24',
          name: '',
          count: ''
        },
        {
          id: '25',
          name: '',
          count: ''
        },
        {
          id: '26',
          name: '',
          count: ''
        },
        {
          id: '27',
          name: '',
          count: ''
        },
        {
          id: '28',
          name: '',
          count: ''
        },
        {
          id: '29',
          name: '',
          count: ''
        },
      ],//存储分类
      top: 90,
    }
  }
  componentDidMount() {
    // 最新文章
    http.getJson('/api/wp-json/wp/v2/posts', '', '').then((res) => {
      if (res.status === 200) {
        res.data.forEach(item => {
          item.title = item.title.rendered
        });
        this.setState({
          listData: res.data
        })
      }
    })
    // 标签
    http.getJson('/api/wp-json/wp/v2/tags', '', '').then((res) => {
      if (res.status === 200) {
        this.setState({
          cateData: res.data
        })
      }
    })
  }
  newPost(val){
    this.props.history.push({pathname:'/article/' + val.id})
  }
  render() {
    const { listData, cateData } = this.state;
    return (
      <SliderAside>
        <Affix offsetTop={this.state.top}>
        {/* 最新文章 */}
        <section>
          <h3 className="hot">
            <Icon type="clock-circle" /><span style={{ paddingLeft: '8px' }}>最新文章</span>
          </h3>
          <ul>
            {
              listData.map((item, index) => {
                return (
                  <li key={item.id} onClick={this.newPost.bind(this,item)}><span className="listNumber">{index + 1}</span><span className="newPost">{item.title}</span></li>
                )
              })
            }
          </ul>
        </section>
        {/* 标签 */}
        <section>
          <h3 className="tags">
            <Icon type="tag" /><span style={{ paddingLeft: '8px' }}>标签</span>
          </h3>
          <div>
            {
              cateData.map((item) => {
                return (
                  <span key={item.id} className="tag">#{item.name}[{item.count}]</span>
                )
              })
            }
          </div>
        </section>

        <div className="clear"></div>
        </Affix>
      </SliderAside>
    );
  }
}

export default withRouter(Slider);
