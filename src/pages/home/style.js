import styled from 'styled-components'
import headerPic from '../../statics/bg.jpg'

export const HeaderWrapper = styled.div`
  height: 160px;
  width: 100vw;
  background: url(${headerPic});
  background-position: 0 -80px;
  background-size: cover;
  .mask{
    padding: 40px;
    width:100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .sub-title{
    font-size: 28px;
    font-weight:bold;
    color: #fff;
  }
  .title{
    margin-top: 10px;
    font-size: 42px;
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
  border-bottom: 1px solid #eee;
  .nav-item{
    font-size: 1.1rem;
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