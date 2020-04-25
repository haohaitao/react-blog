import React, { Component } from 'react';
import { FooterContent } from './style'
import { BackTop,Icon } from 'antd';

class Footer extends Component {
  componentDidMount(){
    if(window.console&&window.console.log){  
      console.log("%cHello world! %c Copyright © 2020"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:2em","font-size:12px;color:#999999;")
    } 
  }
  render() {
    return (
        <FooterContent>
            <p>
              <a
                href="http://www.beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
              >豫ICP备17023037号-1</a>
            </p>
            <p>
              <span>
                Copyright © 2019-2020&nbsp;版权所有&nbsp;
              </span>
              <span className="github">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/haohaitao">
                  <Icon type="github" />
                </a>
              </span>
            </p>
            <BackTop>
              <div className="ant-back-top-inner" title="返回顶部"> 
                <div style={{width: '14px',height: '16px',margin: '8px auto'}}>
                    <Icon type="caret-up" />
                </div>
              </div>
            </BackTop>
        </FooterContent>
    )
  }
}

export default Footer;
