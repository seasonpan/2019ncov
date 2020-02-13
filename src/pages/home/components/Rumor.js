import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { actionCreators } from '../store'
import Swiper from 'swiper';
import {
  InfoTab,
  RumorWrapper
} from '../style'

class Rumor extends Component {
  render() {
    const {rumorList} = this.props
    return (
      <RumorWrapper>
        <InfoTab>辟谣信息</InfoTab>
        <div className="swiper-container" ref={self => this.swiperID = self}>
          <div className="swiper-wrapper">
            {
              rumorList.map((item, index) => (
                <div className="swiper-slide" key={index}>
                  {item}
                  <div>谣言：XXXX</div>
                  <div>谣言：XXXX</div>
                  <div>谣言：XXXX</div>
                </div>
              ))
            }
          </div>
          <div className="swiper-pagination" ref={self => this.paginateID = self}></div>
        </div>
      </RumorWrapper>
    )
  }

  componentDidMount() {
    new Swiper(this.swiperID, {
      observer: true,
      observeParents: true,
      // spaceBetween: 10,
      slidesPerView: 1.2,
      centeredSlides: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: -10,
        depth: 50,
        modifier: 3,
        slideShadows: false
      },
      pagination: {
        el: this.paginateID,
        dynamicBullets: true
      }
    });
  }

}

const mapStateToProps = (state) => ({
  rumorList: state.getIn(['home', 'rumorList']).toJS()
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Rumor)