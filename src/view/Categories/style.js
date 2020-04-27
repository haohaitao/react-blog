import styled from 'styled-components'

export const CateWrapper = styled.div`
  margin-top:20px;
  height: 740px;
  float: left;
  margin-right: 15px;
  ul{
    list-style-type: none;
    max-width: 700px;
  }
  .cate_title {
    padding-left:8px;
  }
  li{
    height: 45px;
    line-height: 45px;
    cursor: pointer;
    width:120px;
  }
  .categoryName{
    transition:padding-left .5s;
  }
  .categoryName:hover{
    padding-left:8px;
    text-decoration: overline;
    color: #ff8b18;
    cursor: pointer;
  }
  h3{
    background: #f8f8f8;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    padding-left: 10px;
    font-size: 25px;
  }
  section{
    border: 1px solid #ddd;
    width: 700px;
    border-radius: 2px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.04);
    margin-bottom:10px;
  }
  section>ul{
    padding-left:10px;
  }
  section>ul li{
    list-style-type:none;
    font-size:13px;
    padding: 8px 0;
    width:220px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor:pointer;
    font-size:20px;
  }
  section>ul li .newPost{
    transition: padding-left .5s;
  }
  section>ul li .newPost:hover{
    color: #ff8b18;
    cursor: pointer;
    position: relative;
    padding-left: 10px;
  }
`

export const MainWrapper = styled.div`
  max-width: 1100px;
  margin:0 auto;
  height: 820px;
  margin-top: 90px;
`

export const SliderAside = styled.aside`
  float:left;
  width:255px;
  font-size:16px;
  h3{
    background: #f8f8f8;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
    padding-left:10px;
    font-size: 14px;
  }
  section{
    border: 1px solid #ddd;
    border-radius: 2px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.04);
    margin-bottom:10px;
  }
  section>ul{
    padding-left:10px;
  }
  section>ul li{
    list-style-type:none;
    font-size:13px;
    padding: 8px 0;
    width:220px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor:pointer;
  }
  section>ul li .newPost{
    transition: padding-left .5s;
  }
  section>ul li .newPost:hover{
    color: #ff8b18;
    cursor: pointer;
    position: relative;
    padding-left: 10px;
  }
  .listNumber{
    font-size: 12px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    background-color: #7f828b;
    color: #fff;
    margin-right: 8px;
    display: inline-block;
  }
  .tag{
    display: inline-block;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #eee;
    cursor:pointer;
    margin: 0 0 8px 8px;
  }
  .tag:hover{
    background:#eee;
    transition:background .5s;
  }
`