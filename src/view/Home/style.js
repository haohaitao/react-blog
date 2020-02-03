import styled from 'styled-components'

export const SectionContent = styled.main`
  animation: fadeIn 0.6s linear;
  max-width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
  height:1600px;
  margin-top:70px;
    article {
      width: 280px;
      height: 340px;
      float: left;
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
        background: #fff;
    }
    article:hover .bg-img {
          filter: blur(3px);
          transform: scale(1.1);
        }

        article:hover .bg-cover {
          background-color: rgba(0, 0, 0, 0.5);
          transition: 0.5s;
        }
        article:hover .bg-cover p {
            transition: 0.5s;
            margin-top: 0px;
            opacity: 1;
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

      .bg-container::before {
          content: 'Loading...';
          position: absolute;
          border-radius: 5px 5px 0 0;
          width: 100%;
          left: 0;
          background-color: rgba(169, 169, 169, 0.75);
          text-align: center;
          line-height: 230px;
          font-size: 26px;
          color: #333333;
          z-index: -1;
        }

        .bg-container::after {
          content: '';
          position: absolute;
          border-radius: 5px 5px 0 0;
          width: 100%;
          left: 0;
          background-color: rgba(255, 255, 255, 0);
          line-height: 230px;
          z-index: -1;
        }

        .bg-img {
          transition: all 0.5s ease;
          height: 230px;
          border-radius: 5px 5px 0 0;
        }

      .bg-cover {
        position: absolute;
        top: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        padding: 40px 28px;
        box-sizing: border-box;
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
        width: 100%;
        height: 110px;
        background: #fff;
        position: relative;
        padding: 7px 15px 10px;
        box-sizing: border-box;
      }
        .title {
          color: #000;
          font-size: 16px;
          display: -webkit-inline-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .title:hover {
            color: #ff8b18;
          }

        .desc-bottom {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 100%;
          padding: 0 15px 10px;
          text-align: left;
        }
          .d-detail {
            position: absolute;
            bottom: 10px;
            padding:0px 20px;
          }
            i {
              font-size: 14px;
              margin-top: -2px;
            }
            i:not(:first-child) {
                margin-left: 12px;
              }
          .hidden-detail > span{
              visibility: hidden;
          }

          .item-icon {
            height: 37px;
            width: 36px;
            float: right;
            border-radius: 50%;
            background-size: cover;
          }
          .clear{
            clear:both;
          }
`