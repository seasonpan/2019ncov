import React, { Component, Fragment } from 'react'
import {
  InfoBox,
  InfoTab
} from '../style'

class Rumor extends Component {
  render() {
    return (
      <Fragment>
        <InfoTab>辟谣信息</InfoTab>
        <InfoBox>
          辟谣信息内容
        </InfoBox>
      </Fragment>

    )
  }
}

export default Rumor