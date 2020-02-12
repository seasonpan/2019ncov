import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Icon } from 'antd';
import moment from 'moment'
import {
  InfoTop,
  InfoBox,
  InfoTab,
  CountItem
} from '../style'

class Map extends Component {
  render() {
    const { numList, updateTime, loading } = this.props
    return (
      <Fragment>
        <InfoTop>
          <div className="tip">
            截至 {updateTime} { loading ? <Icon type="loading" /> : null }
            <span>数据来源：丁香园·丁香医生</span>
          </div>
          <div className="count-list">
            {
              numList.map((item, index) => (
                <CountItem className="count-item" key={index} color={item.color}>
                  <div className="add">较昨日<span>+{item.incr}</span></div>
                  <strong className="count">{item.count}</strong>
                  <div className="label">{item.label}</div>
                </CountItem>
              ))
            }
          </div>
        </InfoTop>
        <InfoTab>疫情地图</InfoTab>
        <InfoBox>
          地图
        </InfoBox>
      </Fragment>
    )
  }

  componentDidMount() {
    this.props.getOverAllData()
  }
}

const mapStateToProps = (state) => ({
  loading: state.getIn(['home', 'mapLoading']),
  numList: state.getIn(['home', 'overAllNum']).toJS(),
  updateTime: moment(state.getIn(['home', 'updateTime'])).format('YYYY-MM-DD HH:mm:ss')
})

const mapDispatchToProps = (dispatch) => ({
  getOverAllData() {
    dispatch(actionCreators.getOverAllData())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)