import React, { Component } from 'react';
import { MainWrapper } from './style'
import * as http from '../../common/http';
import { connect } from 'react-redux';
import * as actionCreators from '../../components/store/actionCreators'

class Everyday extends Component {
  constructor(props){
    super(props)
    this.state = {
      val:[]
    }
  }
  componentDidMount(){
    document.title = "每日一图 - 郝海涛的个人网站"
    http.getJson('api/wp-json/wp/v2/pages/994','','').then( (res)=> {
      if(res.status === 200){
        res.data.content = res.data.content.rendered
        this.setState({
          val:res.data
        })
      }
    })
  }
  render(){
    const { val } = this.state;
    return (
      <MainWrapper className="mobile_everyday">
        <article className="excerpt" dangerouslySetInnerHTML={{__html:val.content}}></article>
      </MainWrapper>
    )
  } 

  componentWillMount(){
    const { menu_changeState } = this.props;
    menu_changeState();
  }

}

const mapState = state => ({
})

const mapDispatch = dispatch => ({
  menu_changeState(value){
      dispatch(actionCreators.is_MenuState(value) )
  }
})


export default connect(mapState, mapDispatch)(Everyday);
