import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavWrapper } from '../style'
import { actionCreators } from '../store'

class Nav extends Component {
  render() {
    const { list, active, handleItemClick } = this.props
    return (
      <NavWrapper>
        {
          list.map((item, index) => (
            <div
              onClick={() => handleItemClick(index)}
              className={index === active ? 'nav-item active' : 'nav-item'}
              key={index}>
              {item}
            </div>
          ))
        }
      </NavWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'list']).toJS(),
  active: state.getIn(['home', 'active']),
})

const mapDispatchToProps = (dispatch) => ({
  handleItemClick(index) {
    dispatch(actionCreators.changeNavActive(index))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);