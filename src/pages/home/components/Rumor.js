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
      <RumorWrapper ref={self => this.wrapperID = self}>
        <InfoTab>辟谣信息{rumorLading ? <Icon type="loading" /> : null}</InfoTab>
        <div className="swiper-container" ref={self => this.swiperID = self}>
          <div className="swiper-wrapper">
            {
              rumorList.map((item, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="rumor-box">
                    <div className="header">
                      <div className="rumor">谣言</div>
                      <div className="title">{item.title}</div>
                      <img alt="" src="https://assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/badge-big@2x.5395c013.png"/>
                    </div>
                    <div className="content">
                      <div className="summary">{item.mainSummary}</div>
                      <div className="body">{item.body}</div>
                    </div>
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
    this.props.changeRumorHeight(this.wrapperID.offsetTop)

    new Swiper(this.swiperID, {
      // init: false,
      observer: true,
      observeParents: true,
      // spaceBetween: 10,
      slidesPerView: 1.3,
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
  rumorLading: state.getIn(['home', 'rumorLading']),
  active: state.getIn(['home', 'active'])
})

const mapDispatchToProps = (dispatch) => ({
  getRumorList() {
    dispatch(actionCreators.getRumorData())
  },
  changeRumorHeight(h){
    dispatch(actionCreators.changeRumorHeight(h))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Rumor)