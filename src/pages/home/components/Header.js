import React, { Component } from 'react'
import {connect} from 'react-redux'
import {HeaderWrapper} from '../style'
import { actionCreators } from '../store'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper ref={self => this.wrapper = self}>
        <div className="mask">
          <div className="sub-title">新型冠状病毒肺炎</div>
          <div className="title">疫情实时动态</div>
        </div>
      </HeaderWrapper>
    )
  }

  componentDidMount(){
    this.props.changeHeaderHeight(this.wrapper.offsetHeight)
  }
}

const mapDispatch = (dispatch) => ({
  changeHeaderHeight(h){
    dispatch(actionCreators.changeHeaderHeight(h))
  }
})

export default connect(null, mapDispatch)(Header);