import styled from 'styled-components'
import headerPic from '../../statics/bg.jpg'

export const HeaderWrapper = styled.div`
  width: 100vw;
  background: url(${headerPic});
  background-size: cover;
  .mask{
    padding: 2rem;
    width:100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .sub-title{
    font-size: 1.3rem;
    font-weight:bold;
    color: #fff;
  }
  .title{
    margin-top: 10px;
    font-size: 2rem;
    font-weight:bold;
    letter-spacing: 2px;
    color: #fff;
  }
`

export const NavWrapper = styled.div`
  display: flex;
  height: 50px;
  line-height: 50px;
  background: #fff;
  border-bottom: .1px solid #ebebeb;
  &.static{
    position: static;
  }
  &.fixed{
    position: fixed;
    width: 100vw;
    top: 0;
    z-index: 9999;
    background: #369bca;
    color: #fff;
    .nav-item{
      &.active{
        color: #fff;
        &::before{
          background: #fff;
        }
      }
    }
  }
  .nav-item{
    font-size: 1rem;
    flex: 1 1;
    text-align: center;
    cursor: pointer;
    &.active{
      position: relative;
      color: #369bca;
      &::before{
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        height: 4px;
        width: 50px;
        transform: translate(-50%, 0);
        background: #369bca;
      }
    }
  }
`

export const InfoTop = styled.div`
  margin-top: 10px;
  padding: 5px 10px;
  background: #fff;
  .tip{
    margin: 10px 5px;
    font-size: 0.58rem;
    span{
      float: right;
    }
  }
  .count-list{
    display: flex;
    width: 100%;
    flex-flow: wrap;
    margin-bottom: 5px;
  }
`
export const CountItem = styled.div`
  width: 33.3333333%;
  text-align: center;
  &:not(:nth-child(3n+1)):before {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 2rem;
    margin-top: 1rem;
    background-image: linear-gradient(180deg,#eee,#e1e1e1 51%,#fff);
  }
  &:nth-child(n+4){
    margin-top: 3px;
  }
  .add{
    margin: 5px 0;
    font-size: 0.48rem;
    font-weight:bold;
    span{
      color: ${(props) => props.color}
    }
  }
  .count{
    font-weight:bold;
    color: ${(props) => props.color}
  }
  .label{
    margin: 5px 0;
    font-weight:bold;
    font-size: 0.65rem;
  }
`

export const InfoBox = styled.div`
  padding: 5px 10px;
  background: #fff;
`

export const InfoTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
  padding: 0 30px;
  border-bottom: .1px solid #ebebeb;
  background: #fff;
  &:before{
    content: '';
      display: block;
      position: absolute;
      left: 17px;
      height: 1.1rem;
      width: 0.2rem;
      background: #369bca;
  }
`
export const NewsWrapper = styled.div`
  .ant-timeline{
    margin: 1rem;
  }
  .time{
    font-size: 0.75rem;
    .ant-tag{
      margin-left: 5px;
      padding: 1px 3px 2px 3px;
      font-size: 0.6rem;
      line-height: 0.7rem;
    }
  }
  .news-box{
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 5px;
    background: #fff;
    .title{
      margin-bottom: 0.6rem;
      color: #222;
      font-weight: 500;
    }
    .summary{
      font-size: 0.75rem;
      color: #737373;
    }
    .source{
      margin-top: 0.5rem;
      font-size: 0.8rem;
      color: #222;
    }
    a {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
`

export const RumorWrapper = styled.div`
  .swiper-container{
    .swiper-pagination-bullet-active{
      background: #4fa5d1;
    }
    .swiper-pagination-bullet{
      width: 6px;
      height: 6px;
    }
    .swiper-slide{
      padding: 10px 0 33px 0;
      .rumor-box{
        height: 20rem;
        overflow: hidden;
        border-radius: 0.5rem;
        border: .05rem solid #ebebeb;
        box-shadow: 0 0.03rem 0.5rem 0 rgba(0,0,0,.08);
        background: #fff;
        .header{
          height: 7rem;
          padding: 0.6rem;
          color: #fff;
          background: #4fa5d1;
          .rumor{
            margin-top: 0.8rem;
            font-size: 2rem;
          }
          .title{
            margin-top: 1rem;
            font-weight: 600;
            font-size: 16px;
          }
          img{
            position: absolute;
            top: 1.1rem;
            right: 0.6rem;
            z-index: 2;
            width: 4.5rem;
            height: 4.5rem;
          }
        }
        .content{
          padding: 0.6rem;
          .summary{
            line-height: 20px;
            color: #333;
            font-weight: 700;
            font-size: 14px;
          }
          .body{
            margin-top: 0.3rem;
            overflow: hidden;
            color: #666;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
          }
        }
      }
    }
  }

`