import React, { Component, Fragment } from 'react'
import {
  InfoBox,
  InfoTab
} from '../style'

class News extends Component {
  render() {
    return (
      <Fragment>
        <InfoTab>实时新闻</InfoTab>
        <InfoBox>
          实时新闻内容
        </InfoBox>
      </Fragment>
    )
  }
}

export default News