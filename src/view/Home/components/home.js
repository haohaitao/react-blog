import React, { Component } from 'react';
import * as http from '../../../common/http';
import { SectionContent } from '../style.js'
import { Icon,Pagination  } from 'antd'
import { withRouter } from 'react-router-dom'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      listData:[
        {
          title: '',
          excerpt: 'Loading...',
          id: '',
          content_first_image: '',
          date: '1970-01-01',
          pageviews: 0,
          total_comments: 0,
        },
        {
          title: '',
          excerpt: 'Loading...',
          id: '',
          content_first_image: '',
          date: '1970-01-01',
          pageviews: 0,
          total_comments: 0,
        },
        {
          title: '',
          excerpt: 'Loading...',
          id: '',
          content_first_image: '',
          date: '1970-01-01',
          pageviews: 0,
          total_comments: 0,
        },
        {
          title: '',
          excerpt: 'Loading...',
          id: '',
          content_first_image: '',
          date: '1970-01-01',
          pageviews: 0,
          total_comments: 0,
        },
        {
          title: '',
          excerpt: 'Loading...',
          id: '',
          content_first_image: '',
          date: '1970-01-01',
          pageviews: 0,
          total_comments: 0,
        },
        {
          title: '',
          excerpt: 'Loading...',
          id: '',
          content_first_image: '',
          date: '1970-01-01',
          pageviews: 0,
          total_comments: 0,
        },
        {
          title: '',
          excerpt: 'Loading...',
          id: '',
          content_first_image: '',
          date: '1970-01-01',
          pageviews: 0,
          total_comments: 0,
        },
        {
          title: '',
          excerpt: 'Loading...',
          id: '',
          content_first_image: '',
          date: '1970-01-01',
          pageviews: 0,
          total_comments: 0,
        },
        {
          title: '',
          excerpt: 'Loading...',
          id: '',
          content_first_image: '',
          date: '1970-01-01',
          pageviews: 0,
          total_comments: 0,
        },
        {
          title: '',
          excerpt: 'Loading...',
          id: '',
          content_first_image: '',
          date: '1970-01-01',
          pageviews: 0,
          total_comments: 0,
        }
      ], //保存拿到的文章数据
      total:0, //分页数量
      page:1,//默认第一页 
    }
  }
  componentWillMount(){
    http.getJson('/api/wp-json/wp/v2/posts?per_page=10','','').then( (res)=> {
      if(res.status === 200){
        res.data.forEach(item => {
          item.title = item.title.rendered
          item.excerpt = item.excerpt.rendered
        });
          this.setState({
            listData:res.data,
            total: parseInt(res.headers["x-wp-total"])
          })
      }
    })
  }
  jump(val){
    this.props.history.push({pathname:'/article/' + val.id})
  }
  onChange(pageNumber) {
    this.setState({
      page:pageNumber
    },()=>{
      http.getJson('/api/wp-json/wp/v2/posts?per_page=10&page=' + pageNumber,'','').then( (res)=> {
        res.data.forEach((item)=>{
          item.title = item.title.rendered
          item.excerpt = item.excerpt.rendered
        })
        this.setState({
          listData:res.data,
          total: parseInt(res.headers["x-wp-total"])
        })
    })
    if(this.state.page === 1){
      this.props.history.push('/');
      document.documentElement.scrollTop = document.body.scrollTop =0;
    }else{
      this.props.history.push('/page/'+ this.state.page);
      document.documentElement.scrollTop = document.body.scrollTop =0;
    }
    })
  }
  render(){
    const { listData,total,page } = this.state
    return (
            <SectionContent>
              {
                listData.map((val,index)=> {
                  return(
                    <article  key={index}>
                      <div className="bg-container">
                      </div>
                        <div className="bg-cover" onClick={this.jump.bind(this,val)}>
                          <div className="bg-img"
                            style={{background: `url(${val.content_first_image}) 100% 100% / 100% 100%`}}
                          ></div>
                        </div>
                      <div className="desc">
                          <p className="title" title={val.title} onClick={this.jump.bind(this,val)}>{val.title}</p>
                          <p className="excerpt" dangerouslySetInnerHTML={{__html:val.excerpt}}></p>
                        <div className="desc-bottom">
                          <div className="d-detail,hidden-detail">
                            <Icon type="calendar" />
                            <span style={{fontSize: '14px',marginLeft: '5px'}}>{val.date?val.date.split('T')[0]:''}</span>
                            <Icon type="eye" />
                            <span style={{fontSize: '14px',marginLeft: '5px'}}>{val.pageviews}</span>
                            {
                              val.total_comments!==0?
                              <div style={{display:'inline-block',marginLeft: '5px'}}>
                                <Icon type="message" />
                                <span style={{fontSize: '14px',marginLeft: '5px'}}>{val.total_comments}</span>
                              </div>
                                : ''
                            }
                          </div>
                        </div>
                      </div>
                  </article>
                  )
                })
              }
              <div className="clear"></div>
              <Pagination style={{textAlign:'right'}} current={page} total={total} onChange={this.onChange.bind(this)} />
            </SectionContent>
    )
  } 
}

export default withRouter(Home);
