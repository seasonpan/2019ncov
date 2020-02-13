import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store';
import { Icon } from 'antd';
import Swiper from 'swiper';
import {
  InfoTab,
  RumorWrapper
} from '../style'


class Rumor extends Component {
  render() {
    const { rumorList, rumorLading } = this.props
    return (
      <RumorWrapper>
        <InfoTab>辟谣信息{rumorLading ? <Icon type="loading" /> : null}</InfoTab>
        <div className="swiper-container" ref={self => this.swiperID = self}>
          <div className="swiper-wrapper">
            {
              rumorList.map((item, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="rumor-box">
                    <div>谣言</div>
                    <div>{item.title}</div>
                    <div>{item.mainSummary}</div>
                    <div>{item.body}</div>
                  </div>
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
    this.props.getRumorList()

    new Swiper(this.swiperID, {
      // init: false,
      observer: true,
      observeParents: true,
      // spaceBetween: 10,
      slidesPerView: 1.2,
      centeredSlides: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: -10,
        depth: 40,
        modifier: 3,
        slideShadows: false
      },
      pagination: {
        el: this.paginateID
      }
    });
  }

}

const mapStateToProps = (state) => ({
  rumorList: state.getIn(['home', 'rumorList']).toJS().splice(0, 5),
  rumorLading: state.getIn(['home', 'rumorLading'])
})

const mapDispatchToProps = (dispatch) => ({
  getRumorList() {
    dispatch(actionCreators.getRumorData())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Rumor)