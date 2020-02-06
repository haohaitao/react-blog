import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width:1050px;
  margin:0 auto;
  margin-top:90px;
`
export const SectionContent = styled.main`
  animation: fadeIn 0.6s linear;
  max-width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
  margin-bottom: 70px;
  float:left;
  article {
    width: 700px;
    height: 193px;
    position: relative;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    margin: 20px;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }
  article:hover {
    box-shadow: 1px 2px 12px 1px rgba(0, 0, 0, 0.15);
  }
  
  .bg-cover:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
  .bg-img::before{
    content:'Loading...';
    position: absolute;
    border-radius: 5px 5px 0 0;
    width: 100%;
    left: 0;
    background-color: rgba(169, 169, 169, 0.75);
    text-align: center;
    line-height: 193px;
    font-size: 26px;
    color: #333333;
    z-index: -1;
  }
  .bg-img::after {
    content: '';
    position: absolute;
    border-radius: 5px 5px 0 0;
    width: 100%;
    left: 0;
    background-color: rgba(255, 255, 255, 0);
    line-height: 193px;
    z-index: -1;
  }
  .top-icon {
    width: 46px;
    opacity: 0.86;
    height: 46px;
    position: absolute;
    left: -9px;
    top: -4px;
    text-align: center;
    line-height: 44px;
    color: #fff;
    background-size: cover;
  }
  i {
    font-size: 19px;
  }
  
  .bg-img {
    transition: all 1s ease;
    height: 193px;
    border-radius: 5px 5px 0 0;
  }
  
  .bg-cover {
    overflow: hidden;
    width: 200px;
    height: auto;
    clear: both;
    float: left;
    position:relative;
    box-sizing: border-box;
    border-radius: 8px;
    -webkit-transition: -webkit-transform .3s linear;
    -moz-transition: -moz-transform .3s linear;
    -o-transition: -o-transform .3s linear;
    transition: transform .3s linear;
  }
  .bg-cover p {
    font-size: 14px;
    margin: 0;
    margin-top: 26px;
    padding: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    opacity: 0;
    line-height: 26px;
    color: #fff;
  }
  
  .other-bgcover {
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 1px;
    left: 0;
    width: 110%;
    min-height: 100px;
    transform: rotate(5deg) translate(-10px, -20px);
    background-color: #fff;
  }
  .right-bgcover {
    transform: rotate(-10deg) translate(10px, -30px);
    opacity: 0.7;
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
  
  .desc {
    width: 70%;
    height: 110px;
    background: #fff;
    padding: 7px 15px 10px;
    box-sizing: border-box;
    float: left;
  }
  .title {
    color: #000;
    font-size: 16px;
    height: 30px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    transition: padding-left .5s;
  }
  .title:hover {
    color: #ff8b18;
    cursor:pointer;
    position:relative;
    padding-left: 10px;
    text-decoration: overline;
  }
  .excerpt {
    height: 90px;
  }
  .desc-bottom {
    width: 400px;
  }
  .d-detail {
    position: absolute;
    bottom: 10px;
    padding: 0px 20px;
  }
  i {
    font-size: 14px;
    margin-top: -2px;
  }
  i:not(:first-child) {
    margin-left: 5px;
  }
  .hidden-detail > span {
    visibility: hidden;
  }
  
  .item-icon {
    height: 37px;
    width: 36px;
    float: right;
    border-radius: 50%;
    background-size: cover;
  }
  .clear {
    clear: both;
  }
`

export const SliderAside = styled.aside`
  float:left;
  width:255px;
  margin-top:20px;
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