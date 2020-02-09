import React, { Component } from 'react';
import * as http from '../../../common/http';
import { CateWrapper } from '../style'
import { withRouter } from 'react-router-dom'

class Cate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData:[]
    }
  }
  componentWillMount() {
    // 分类
    http.getJson('/api/wp-json/wp/v2/categories', '', '').then((res) => {
      if (res.status === 200) {
          this.setState({
            listData:res.data
          })
      }
    })
  }
  jump(val){
    this.props.history.push({pathname:'/catedetail/' + val.id})
    console.log(val)
  }
  render() {
    const { listData } = this.state;
    return (
      <CateWrapper>
        <section>
          <h3 className="hot">
            <span style={{ paddingLeft: '8px' }}>分类目录</span>
          </h3>
          <ul>
            {
              listData.map( (ele)=>{
                return(
                  <li key={ele.id} onClick={this.jump.bind(this,ele)}>#&nbsp;&nbsp;<span className="categoryName">{ele.name}&nbsp;&nbsp;[{ele.count}]</span></li>
                )
              })
            }
          </ul>
        </section>
      </CateWrapper>
    );
  }
}

export default withRouter(Cate);