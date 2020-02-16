import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavWrapper } from '../style'
import { actionCreators } from '../store'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wrapperStyle: 'static'
    }
  }
  render() {
    const { list, active, handleItemClick } = this.props
    return (
      <NavWrapper className={this.state.wrapperStyle}>
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

  componentDidMount() {
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.changeNavPosition())
  }

  bindEvents() {
    window.addEventListener('scroll', () => this.changeNavPosition())
  }

  changeNavPosition() {
    console.log(document.documentElement.scrollTop,this.props.headerHeight)
    if (document.documentElement.scrollTop > this.props.headerHeight) {
      this.setState({
        wrapperStyle: 'fixed'
      })
    } else {
      this.setState({
        wrapperStyle: 'static'
      })
    }
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'list']).toJS(),
  active: state.getIn(['home', 'active']),
  headerHeight: state.getIn(['home', 'headerHeight'])
})

const mapDispatchToProps = (dispatch) => ({
  handleItemClick(index) {
    dispatch(actionCreators.changeNavActive(index))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);