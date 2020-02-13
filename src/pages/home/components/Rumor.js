import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { actionCreators } from '../store'
import Swiper from 'swiper';
import {
  InfoBox,
  InfoTab,
  RumorWrapper
} from '../style'

class Rumor extends Component {
  render() {
    const { rumorList } = this.props
    return (
      <RumorWrapper>
        <InfoTab>辟谣信息</InfoTab>
        <InfoBox>
          <div className="swiper-container" ref={self => this.swiperID = self}>
            <div className="swiper-wrapper">
              {
                rumorList.map((item, index) => (
                  <div className="swiper-slide" key={index}>{item}</div>
                ))
              }
            </div>
          </div>
        </InfoBox>
      </RumorWrapper>
    )
  }

  componentDidMount() {
    new Swiper(this.swiperID, {
      observer: true,
      observeParents: true
    });
  }

}

const mapStateToProps = (state) => ({
  rumorList: state.getIn(['home', 'rumorList']).toJS()
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Rumor)