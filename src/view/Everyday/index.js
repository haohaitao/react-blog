import React, { Component } from 'react';
import { MainWrapper } from './style'
import * as http from '../../common/http';

class Everyday extends Component {
  constructor(props){
    super(props)
    this.state = {
      val:[]
    }
  }
  componentDidMount(){
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
      <MainWrapper>
        <article className="excerpt" dangerouslySetInnerHTML={{__html:val.content}}></article>
      </MainWrapper>
    )
  } 
}

export default Everyday;
