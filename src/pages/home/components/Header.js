import React, { Component } from 'react'
import {HeaderWrapper} from '../style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="mask">
          <div className="sub-title">新型冠状病毒肺炎</div>
          <div className="title">疫情实时动态</div>
        </div>
      </HeaderWrapper>
    )
  }
}

export default Header;