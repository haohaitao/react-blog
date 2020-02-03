import React, { Component } from 'react';
import * as http from '../../common/http';
import * as config from '../../common/config';
import { SectionContent } from './style.js'
import { Icon } from 'antd'

let rootUrl = config.default.apiUrl
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      listData:[
        {
          classify: '',
          title: '1',
          description: '',
          id: '',
          image: '',
          date: '1970-01-01',
          pageviews: 20,
          total_comments: 20,
          classifyId: 1
        },
        {
          classify: '',
          title: '3',
          description: '',
          id: '',
          image: '',
          date: '1970-01-01',
          pageviews: 20,
          total_comments: 20,
          classifyId: 2
        },
        {
          classify: '',
          title: '2',
          description: '',
          id: '',
          image: '',
          date: '1970-01-01',
          pageviews: 20,
          total_comments: 20,
          classifyId: 3
        }
      ] //保存拿到的文章数据
    }
  }
  componentWillMount(){
    console.log('组件加载完成')
    http.getJson('/wp-json/wp/v2/posts?per_page=12','',rootUrl).then( (res)=> {
      console.log(res)
      res.data.forEach(item => {
        item.title = item.title.rendered
        item.excerpt = item.excerpt.rendered
      });
        this.setState({
          listData:res.data
        },()=>{
          console.log(this.state)
        })
    })
  }
  jump(val){
    console.log(val)
  }
  render(){
    const { listData } = this.state
    return (
            <SectionContent>
              {
                listData.map((val,index)=> {
                  return(
                    <article  key={index}>
                      <div className="bg-container">
                        <div
                          className="bg-img"
                          style={{background: `url(${val.content_first_image}) 100% 100% / 100% 100%`}}
                        ></div>
                      </div>
                        <div className="bg-cover" onClick={this.jump.bind(this,val)}>
                          <p dangerouslySetInnerHTML={{__html: val.excerpt}}></p>
                        </div>
                      <div className="other-bgcover right-bgcover"></div>
                      <div className="other-bgcover"></div>
                      <div className="desc">
                          <p className="title" title="val.title">{val.title}</p>
                        <div className="desc-bottom">
                          <div className="d-detail,hidden-detail">
                            <Icon type="calendar" />
                            <span style={{fontSize: '14px'}}>{val.date?val.date.split('T')[0]:''}</span>
                            <Icon type="eye" />
                            <span style={{fontSize: '14px'}}>{val.pageviews}</span>
                            <Icon type="edit" />
                            <span style={{fontSize: '14px'}}>{val.total_comments}</span>
                          </div>
                        </div>
                      </div>
                  </article>
                  )
                })
              }
              <div className="clear"></div>
            </SectionContent>
    );
  } 
}

export default Home;
