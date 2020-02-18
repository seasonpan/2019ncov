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
    const { list, active } = this.props
    return (
      <div style={{height: '50px'}}>
        <NavWrapper className={this.state.wrapperStyle}>
          {
            list.map((item, index) => (
              <div
                onClick={() => this.handleItemClick(index)}
                className={index === active ? 'nav-item active' : 'nav-item'}
                key={index}>
                {item}
              </div>
            ))
          }
        </NavWrapper>
      </div>

    )
  }

  componentDidMount() {
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.changeNav())
  }

  bindEvents() {
    window.addEventListener('scroll', () => this.changeNav())
  }

  handleItemClick(index) {
    switch (index) {
      case 0:
        window.scrollTo(0, this.props.headerHeight)
        break;
      case 1:
        window.scrollTo(0, this.props.rumorOffSetHeight - 50)
        break;
      case 2:
        window.scrollTo(0, this.props.newsOffSetHeight - 50)
        break;
      default:
        break;
    }
    this.props.changeNavActive(index)
  }

  changeNav() {
    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop //这两个值总会有一个恒为0
    this.setState({ scrollTop })
    if (scrollTop >= this.props.headerHeight) {
      (this.state.wrapperStyle !== 'fixed') && this.setState({
        wrapperStyle: 'fixed'
      })
    } else if (scrollTop < this.props.headerHeight) {
      (this.state.wrapperStyle !== 'static') && this.setState({
        wrapperStyle: 'static'
      })
    }
    //nav 高度50px 置顶后要减去 缺失的nav和置顶的nav，共100ox
    if (scrollTop >= this.props.newsOffSetHeight - 50) {
      (this.props.active !== 2) && this.props.changeNavActive(2)
    } else if (scrollTop >= this.props.rumorOffSetHeight - 50) {
      (this.props.active !== 1) && this.props.changeNavActive(1)
    } else {
      (this.props.active !== 0) && this.props.changeNavActive(0)
    }
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'list']).toJS(),
  active: state.getIn(['home', 'active']),
  headerHeight: state.getIn(['home', 'headerHeight']),
  newsOffSetHeight: state.getIn(['home', 'newsOffSetHeight']),
  rumorOffSetHeight: state.getIn(['home', 'rumorOffSetHeight'])
})

const mapDispatchToProps = (dispatch) => ({
  changeNavActive(index) {
    dispatch(actionCreators.changeNavActive(index))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);