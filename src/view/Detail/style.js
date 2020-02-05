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
      width: 100%;
    }
    .art-header {
      padding-bottom: 12px;
      border-bottom: 1px dashed #b7b7b7;
      position: relative;
    }
    h1 {
      font-size: 22px;
      color: #222;
      font-weight: 400;
      line-height: 1.8;
    }

    .header-info {
      margin: 12px 0px 0;
    }

    .header-tag {
      width: 85%;
      margin-top: 14px;
      height: 33px;
    }
    .header-tag span {
      margin-right: 12px;
    }
    .tag-time {
      position: absolute;
      right: 0;
      bottom: 12px;
      line-height: 14px;
    }

    .content-footer {
      border-top: 1px solid #e0e0e0;
      padding-top: 26px;
      color: #24292e;
      font-size: 14px;
      text-align: center;
    }
    a {
      border-bottom: 1px solid #ccc;
    }
    a:hover {
      border-bottom: 1px solid #eb5055;
    }
`