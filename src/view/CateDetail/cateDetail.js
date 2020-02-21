import React, { Component } from 'react';
import * as http from '../../common/http';
import { CateDetailWrapper } from './style'
import { withRouter } from 'react-router-dom'
import { Icon,Pagination  } from 'antd'

class CateDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: [
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
      total: 0, //分页数量
      page: 1,//默认第一页 
      category_name:'',//分类名字
    }
  }
  componentWillMount() {
    // 分类
    let cateId = this.props.match.params.id
    http.getJson('/api/wp-json/wp/v2/posts?per_page=12&categories=' + cateId, '', '').then((res) => {
      if (res.status === 200) {
        res.data.forEach(item => {
          item.title = item.title.rendered
          item.excerpt = item.excerpt.rendered
        });
        this.setState({
          listData: res.data,
          total: parseInt(res.headers["x-wp-total"]),
          category_name:res.data['0'].category_name
        })
      }
    })
  }
  onChange(pageNumber){
    let cateId = this.props.match.params.id
    this.setState({
      page:pageNumber
    },()=>{
      http.getJson('/api/wp-json/wp/v2/posts?per_page=12&page='+ pageNumber + '&categories=' + cateId, '', '').then((res) => {
        if (res.status === 200) {
          res.data.forEach(item => {
            item.title = item.title.rendered
            item.excerpt = item.excerpt.rendered
          });
          this.setState({
            listData: res.data,
            total: parseInt(res.headers["x-wp-total"]),
            category_name:res.data['0'].category_name
          })
        }
      })
    })
    document.documentElement.scrollTop = document.body.scrollTop =0;
  }
  jump(val) {
    this.props.history.push({ pathname: '/article/' + val.id })
  }
  render() {
    const { listData,page,total,category_name } = this.state;
    return (
      <CateDetailWrapper>
        <section className="artList-by-type">
          <p>归类在<span className="type-title">{category_name ? category_name : '加载中..'}</span>下的文章</p> 
          <p>共有<span className="type-total">{total}</span>篇</p>
        </section>
        {
          listData.map((val, index) => {
            return (
              <article key={index}>
                <div className="bg-container">
                </div>
                <div className="bg-cover" onClick={this.jump.bind(this, val)}>
                  <div className="bg-img"
                    style={{ background: `url(${val.content_first_image}) 100% 100% / 100% 100%` }}
                  ></div>
                </div>
                <div className="desc">
                  <p className="title" title={val.title} onClick={this.jump.bind(this, val)}>{val.title}</p>
                  <p className="excerpt" dangerouslySetInnerHTML={{ __html: val.excerpt }}></p>
                  <div className="desc-bottom">
                    <div className="d-detail,hidden-detail">
                      <Icon type="calendar" />
                      <span style={{ fontSize: '14px', marginLeft: '5px' }}>{val.date ? val.date.split('T')[0] : ''}</span>
                      <Icon type="eye" />
                      <span style={{ fontSize: '14px', marginLeft: '5px' }}>{val.pageviews}</span>
                      {
                        val.total_comments !== 0 ?
                          <div style={{ display: 'inline-block', marginLeft: '5px' }}>
                            <Icon type="message" />
                            <span style={{ fontSize: '14px', marginLeft: '5px' }}>{val.total_comments}</span>
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
        <Pagination style={{ textAlign: 'right', marginRight: '20px'}} current={page} total={total} onChange={this.onChange.bind(this)} />
      </CateDetailWrapper>
    );
  }
}

export default withRouter(CateDetail);
