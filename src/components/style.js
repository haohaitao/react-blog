import styled from 'styled-components'

export const HeaderWrapper = styled.div`
*{
  margin: 0;
	padding: 0;
	outline: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-khtml-user-select: none;
	user-select: none;
}
  header {
    background: rgba(255, 255, 255, 0.94);
    width: 100%;
    height: 70px;
    position: fixed;
    margin-left: -8px;
    top: 0;
    z-index: 1;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  .container {
    width: 1080px;
    min-width: 1080px;
    margin: 0 auto;
    height: 100%;
    color: #3c3c3c;
  }
    @media screen and (max-width: 1000px) {
      .container{
        width: 85%;
      }
    }
    @media screen and (min-width: 1000px) {
      .container{
        width: 1080px;
      }
    }
    a {
      color: #3c3c3c;
      text-decoration: none;
    }
    .home {
      height: 100%;
      line-height: 70px;
      font-size: 24px;
      float: left;
    }
      a {
        font-size: 20px;
        position: relative;
        z-index: 1;
      }

    .nav-right{
        float: right;
        line-height: 70px;
      }
        .nav-far {
            margin-right: 38px;
        }
            li {
            position: relative;
            float: left;
            margin: 0 16px;
            list-style: none;
            }
`