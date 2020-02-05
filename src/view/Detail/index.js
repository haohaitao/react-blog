import React, { Component } from 'react';
import * as http from '../../common/http';
import { ArticleContent } from './style.js'
import { Icon } from 'antd'
import { withRouter,Link } from 'react-router-dom'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: [], //保存拿到的文章数据
      tagData:[],//存文章标签
    }
  }
  componentWillMount() {
    //获取页面详情
    let id = this.props.match.params.id;
    let tempTag = this.state.tagData
    let tempBlog = this.state.blogData
    http.getJson('/api/wp-json/wp/v2/posts/' + id,'','').then( (res)=>{
      res.data.title = res.data.title.rendered
      res.data.content = res.data.content.rendered
      res.data.categories = res.data.categories['0']
      this.setState({
        blog:res.data
      })
      console.log(res.data)
      if(res.data.tags.length>0){
          this.setState({
            tagData:[]
          })//如果tags有内容，清空tagData
          res.data.tags.map( (item)=> {
          http.getJson('/api/wp-json/wp/v2/tags/' + item,'','').then( (res)=> {
            this.setState({
              tagData:tempTag.push(res.data)
            },()=>console.log(this.state))
          })
        })
      }
    })
    console.log(this.state)
  }

  jump(val) {
    console.log(val)
  }

  render() {
    const { blog,tagData } = this.state
    return (
      <ArticleContent>
              <div className="detail-article" >
                <div className="art-header">
                  <h1>{blog.title}</h1>
                  <div className="header-info">
                    <i className="el-icon-table-lamp" />
                    <Link to="`/categorie?categorieId=${blog.categories}`">{blog.category_name}</Link>
                    <i className="el-icon-date" />
                    {blog.date ? blog.date.split('T')['0'] : '1970-01-01'}
                    <i className="el-icon-view" />
                    {blog.pageviews}
                    <i className="el-icon-s-comment" />
                    <span>{blog.total_comments}</span>
                  </div>
                  <div className="header-tag">
        
                          <span>{tagData.name}</span>
                  </div>
                  <div className="tag-time">
                    <i className="el-icon-timer" />
                    {blog.date ? blog.date.split('T')['1'] : '1970-01-01'}
                  </div>
                </div>
                <div id="blog" dangerouslySetInnerHTML={{__html:blog.content}}></div>
                <div className="content-footer">
                  <p>本文由 <Link to="/">{blog.author === 1 ? '一只' : '博主'}</Link> 创作，转载请注明</p>
                  <p>最后编辑时间：{(blog.modified ? blog.modified.split('T')['0'] : '1970-01-01') + ' ' + (blog.modified ? blog.modified.split('T')['1'] : '00:00:00')}</p>
                </div>
            </div>
      </ArticleContent>
    )
  }
}

export default withRouter(Detail);
