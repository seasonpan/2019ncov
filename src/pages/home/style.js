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
    width: 0.08rem;
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
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
  padding: 0 10px;
  border-bottom: .1px solid #ebebeb;
  background: #fff;
`