import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Icon, Timeline, Tag } from 'antd';
import moment from 'moment'
import {
  InfoTab,
  NewsWrapper
} from '../style'

class News extends Component {
  render() {
    const { newList, newsLoading } = this.props
    return (
      <NewsWrapper ref={self => this.wrapperID = self}>
        <InfoTab>实时新闻{newsLoading ? <Icon type="loading" /> : null}</InfoTab>
        <Timeline pending={true}>
          {
            newList.map((item, index) => (
              <Timeline.Item key={index} color="#369bca">
                <div className="time">
                  {moment(item.pubDate).format('YYYY-MM-DD HH:mm:ss')}
                  {index === 0 ? <Tag color="#f50">最新</Tag> : null}
                </div>
                <div className="news-box">
                  <div className="title">{item.title}</div>
                  <div className="summary">{item.summary}</div>
                  <div className="source">来源：{item.infoSource}</div>
                  <a href={item.sourceUrl}> </a>
                </div>
              </Timeline.Item>
            ))
          }
        </Timeline>
      </NewsWrapper>
    )
  }
  componentDidMount() {
    this.props.getNewsList()
    this.props.changeNewsHeight(this.wrapperID.offsetTop)
  }
}

const mapStateToProps = (state) => ({
  newList: state.getIn(['home', 'newsList']).toJS(),
  newsLoading: state.getIn(['home', 'newsLoading']),
  active: state.getIn(['home', 'active'])
})

const mapDispatchToProps = (dispatch) => ({
  getNewsList() {
    dispatch(actionCreators.getNewsData())
  },
  changeNewsHeight(h){
    dispatch(actionCreators.changeNewsHeight(h))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(News)