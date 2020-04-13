import React, { Component } from 'react';
import * as http from '../../common/http';
import { ArticleContent } from './style.js'
import { Tag,Icon,Spin   } from 'antd'
import { withRouter } from 'react-router-dom'
// Use import
import Valine from 'valine';

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: [], //保存拿到的文章数据
      tagData:[],//存文章标签
      rightData:'',//下一篇文章id
      leftData:'',//上一篇文章的id
      loading: true
    }
  }
  componentWillMount() {
    //获取页面详情
    let id = this.props.match.params.id;
    http.getJson('/api/wp-json/wp/v2/posts/' + id,'','').then( (res)=>{
      res.data.title = res.data.title.rendered
      res.data.content = res.data.content.rendered
      res.data.categories = res.data.categories['0']
      this.setState({
        blog:res.data,
        loading: false
      })
      if(res.data.next_post_id){
        this.setState({
          rightData:res.data.next_post_id
        })
      }
      if(res.data.previous_post_id){
        this.setState({
          leftData:res.data.previous_post_id
        })
      }
      if(res.data.tags.length>0){
          this.setState({
            tagData:[]
          })//如果tags有内容，清空tagData
          let tempTag = []
          res.data.tags.map( (item)=> {
            return(
              http.getJson('/api/wp-json/wp/v2/tags/' + item,'','').then( (res)=> {
                tempTag.push(res.data)
                this.setState({
                  tagData:tempTag
                })
              })
            )
        })
      }
      new Valine({
        el: '#vcomments' ,
        appId: 'wNI2p4s8vWn36lxuaIjj6UeL-gzGzoHsz',
        appKey: 'YUbtra7lMlHq7tg0ykWAUUKX',
        notify:true, 
        verify:true, 
        avatar:'mp', 
        placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!',
        recordIP:true,
        path:this.props.match.url
      })
    })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.match.params.id !== this.props.match.params.id){
      let id = nextProps.match.params.id;
      this.setState({
        loading: true
      })
      http.getJson('/api/wp-json/wp/v2/posts/' + id,'','').then( (res)=>{
        res.data.title = res.data.title.rendered
        res.data.content = res.data.content.rendered
        res.data.categories = res.data.categories['0']
        this.setState({
          blog:res.data,
          rightData:res.data.next_post_id,
          leftData:res.data.previous_post_id,
          loading: false
        })
        if(res.data.tags.length>0){
            this.setState({
              tagData:[]
            })//如果tags有内容，清空tagData
            let tempTag = []
            res.data.tags.map( (item)=> {
              return(
                http.getJson('/api/wp-json/wp/v2/tags/' + item,'','').then( (res)=> {
                  tempTag.push(res.data)
                  this.setState({
                    tagData:tempTag
                  })
                })
              )
          })
        }
        new Valine({
          el: '#vcomments' ,
          appId: 'wNI2p4s8vWn36lxuaIjj6UeL-gzGzoHsz',
          appKey: 'YUbtra7lMlHq7tg0ykWAUUKX',
          notify:true, 
          verify:true, 
          avatar:'mp', 
          placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!',
          recordIP:true,
          path:this.props.match.url
        })
      })
      document.documentElement.scrollTop = document.body.scrollTop =0;
    }
  }
  componentDidMount(){
    document.title = '文章详情 - 郝海涛的个人网站'
  }
  previous(item){
    this.props.history.push({pathname:'/article/' + item})
  }
  next(item){
    this.props.history.push({pathname:'/article/' + item})
  }
  render() {
    const { blog,tagData,rightData,leftData,loading } = this.state
    return (
      <ArticleContent>
            <Spin  tip="Loading..." style={{marginTop: '25%'}} spinning={loading}>
            {
                  leftData? 
                  <div className="post-nav-l" title="上一篇" onClick={this.previous.bind(this,leftData)}>
                        <span>
                          <Icon type="left" />
                        </span>
                  </div> : ''
            }
            {
              rightData ?
              <div className="post-nav-r" title="下一篇"  onClick={this.next.bind(this,rightData)}>
                  <span>
                    <Icon type="right" />
                  </span>
            </div>:''
            }
              <div className="detail-article" >
                <div className="art-header">
                  <h2>{blog.title}</h2>
                  <div className="header-info">
                    <span>发布于：{blog.date ? blog.date.split('T')['0'] + ' ' + blog.date.split('T')['1'] : '1970-01-01'}</span>
                    <span>{blog.pageviews}次浏览</span>                    
                    <span>{blog.total_comments}条评论</span>
                  </div>
                </div>
                <div id="blog" dangerouslySetInnerHTML={{__html:blog.content}}></div>
                <div className="content-footer">
                <div className="article-info">
                  <div>文章分类：<Tag color="blue">{blog.category_name}</Tag></div>
                  <div>文章标签：{
                      tagData.map( (ele)=>{
                        return(
                          <Tag color="blue" key={ele.id} style={{paddingRight:'8px'}}>
                                  {ele.name}
                                </Tag>
                        )
                      })
                    }
                  </div> 
                  <p>版权声明：<a href="https://creativecommons.org/licenses/by-nc/3.0/cn/deed.zh" target="_blank" rel="noopener noreferrer"> 自由转载-署名-非商用</a></p>
                  <p>最后编辑时间：{(blog.modified ? blog.modified.split('T')['0'] : '1970-01-01') + ' ' + (blog.modified ? blog.modified.split('T')['1'] : '00:00:00')}</p>
                </div>
                <div id="vcomments"></div>
                </div>
            </div>
            </Spin>
      </ArticleContent>
    )
  }
}

export default withRouter(Detail);
