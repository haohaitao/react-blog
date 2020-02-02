import React, { Component } from 'react';
import { FooterWrapper } from './style'
import { BackTop,Icon } from 'antd';

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <footer>
          <div className="container">
            <span className="footer-flot sec-desc-footer">
              <a
                href="http://www.beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
              >豫ICP备17023037号-1</a>
            </span>
            <span className="footer-flot sec-footer-flot">｜</span>
            <p className="link-git">
              <span className="name">
                Copyright © 2019-2020&nbsp;
                <a target="_blank" href="/" rel="noopener noreferrer">版权所有</a>&nbsp;
              </span>
              <span className="github">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/haohaitao">
                  <Icon type="github" />
                </a>
              </span>
            </p>
            <BackTop>
              <div className="ant-back-top-inner" title="返回顶部"> 
                <div style={{width: '14px',height: '16px',margin: '12px auto'}}>
                    <Icon type="caret-up" />
                </div>
              </div>
            </BackTop>
          </div>
        </footer>
      </FooterWrapper>
    )
  }
}

export default Footer;
