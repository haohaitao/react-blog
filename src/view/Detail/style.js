import styled from 'styled-components'

export const ArticleContent = styled.article`
    animation: fadeIn 0.6s linear;
    max-width: 700px;
    padding: 0 25px 30px;
    margin: 0 auto;
    background-color: #fff;
    position: relative;
    text-align: left;
    font-size: 15px;
    line-height: 32px;
    margin-top: 90px;
    img{
      max-width: 100%;
      width: auto;
      height: auto;
      vertical-align: middle;
      display: block;
    }
    .art-header {
      padding-bottom: 12px;
      border-bottom: 1px dashed #b7b7b7;
      position: relative;
    }

    .header-info {
      margin: 12px 0px 0;
      color: #999;
      font-size: 12px;
    }
    .header-info span{
      padding-right:6px;
    }

    .article-info{
      border-left: 2px solid #ccc;
      background-color: #f6f8fa;
      margin-top: 30px;
      margin-bottom: 15px;
      padding: 15px 0 15px 15px;
      font-size: 14px;
      margin-top:20px;
    }
    .content-footer {
      border-top:1px dashed #eee;
    }
    a {
      border-bottom: 1px solid #ccc;
    }
`