import React, { Component } from 'react';
import { SectionContent } from '../style.js'
import { Icon,Pagination } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as action from '../store/actionCreators'

class Home extends Component {

  render(){
    const { listData,total,page } = this.props
    const { onChange, history, jump } = this.props
    return (
            <SectionContent>
              {
                listData.map((val,index)=> {
                  return(
                    <article  key={index} className="home_article">
                        <div className="bg-cover" onClick={()=> jump(history, val)}>
                          <div className="bg-img"
                            style={{background: `url(${val.content_first_image}) 100% 100% / 100% 100%`}}
                          ></div>
                        </div>
                      <div className="desc">
                          <p className="title" title={val.title} onClick={()=> jump(history, val)}>{val.title}</p>
                          <p className="excerpt" dangerouslySetInnerHTML={{__html:val.excerpt}}></p>
                        <div className="desc-bottom">
                          <div className="d-detail,hidden-detail">
                            <Icon type="calendar" />
                            <span style={{fontSize: '14px',marginLeft: '5px'}}>{val.post_date}</span>
                            <span style={{fontSize: '14px',marginLeft: '5px'}}><span style={{marginRight: '5px'}}><Icon type="eye" /></span>{val.pageviews}</span>
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
              <Pagination style={{textAlign:'right',marginRight: '20px'}} current={page} total={total} onChange={(pageNumber)=>onChange(pageNumber,history)} />
            </SectionContent>
    )
  }
  componentWillMount(){
    const { get_data } = this.props;
    get_data(); //获取数据
  } 
}

const mapState = state => ({
  loading: state.home.loading_state,
  listData: state.home.listData,
  total: state.home.total,
  page: state.home.page,
})

const mapDispatch = dispatch => ({
  change_loading(value) {
    dispatch(action.spinState(value))
  },
  //获取数据
  get_data(){
    dispatch(action.getData())
  },
  //分页
  onChange(page,history){
    dispatch(action.change_page(page))
    if(page === 1){
      history.push('/');
      document.documentElement.scrollTop = document.body.scrollTop =0;
    }else{
      history.push('/page/'+ page);
      document.documentElement.scrollTop = document.body.scrollTop =0;
    }
  },
  //进入详情
  jump(history, val){
    history.push({pathname:'/article/' + val.id})
  }
})

export default withRouter(connect(mapState, mapDispatch)(Home));