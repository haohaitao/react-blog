import React, { Component } from 'react';
import * as http from '../../../common/http';
import * as config from '../../../common/config';
import { SliderAside } from '../style'
import { Icon } from 'antd';

let rootUrl = config.default.apiUrl
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
    }
  }
  componentWillMount() {
    // 最新文章
    http.getJson('/wp-json/wp/v2/posts', '', rootUrl).then((res) => {
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
    http.getJson('/wp-json/wp/v2/tags', '', rootUrl).then((res) => {
      if (res.status === 200) {
        this.setState({
          cateData: res.data
        })
      }
    })
  }
  componentDidMount() {
  }

  render() {
    const { listData, cateData } = this.state;
    return (
      <SliderAside>
        {/* 最新文章 */}
        <section>
          <h3 className="hot">
            <Icon type="clock-circle" /><span style={{ paddingLeft: '8px' }}>最新文章</span>
          </h3>
          <ul>
            {
              listData.map((item, index) => {
                return (
                  <li key={item.id}><span className="listNumber">{index + 1}</span>{item.title}</li>
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
      </SliderAside>
    );
  }
}

export default Slider;
