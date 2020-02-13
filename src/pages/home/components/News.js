import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Icon, Timeline } from 'antd';
import moment from 'moment'
import {
  InfoTab
} from '../style'

class News extends Component {
  render() {
    const { newList, newsLoading } = this.props
    return (
      <Fragment>
        <InfoTab>实时新闻{newsLoading ? <Icon type="loading" /> : null}</InfoTab>
        <Timeline pending={true}>
          {
            newList.map((item, index) => (
              <Timeline.Item key={index}>
                <div>{moment(item.pubDate).format('YYYY-MM-DD HH:mm:ss')}</div>
                {item.title}
                <div>{item.summary}</div>
                <div>{item.infoSource}</div>
              </Timeline.Item>
            ))
          }
        </Timeline>
      </Fragment>
    )
  }
  componentDidMount() {
    this.props.getNewsList()
  }
}

const mapStateToProps = (state) => ({
  newList: state.getIn(['home', 'newsList']).toJS(),
  newsLoading: state.getIn(['home', 'newsLoading'])
})

const mapDispatchToProps = (dispatch) => ({
  getNewsList() {
    dispatch(actionCreators.getNewsData())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(News)