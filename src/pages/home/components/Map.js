import React, { Component, Fragment } from 'react'
import {
  InfoTop,
  InfoBox,
  InfoTab
} from '../style'

class Map extends Component {
  render() {
    return (
      <Fragment>
        <InfoTop>
          全国统计数据
        </InfoTop>
        <InfoTab>疫情地图</InfoTab>
        <InfoBox>
          地图
        </InfoBox>
      </Fragment>

    )
  }
}

export default Map