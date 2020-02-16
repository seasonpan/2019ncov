import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import echarts from 'echarts';
import chinaJson from 'echarts/map/json/china.json';
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
            截至 {updateTime} {loading ? <Icon type="loading" /> : null}
            <span>数据来源：丁香园·丁香医生</span>
          </div>
          <div className="count-list">
            {
              numList.map((item, index) => (
                <CountItem className="count-item" key={index} color={item.color}>
                  <div className="add">较昨日{item.incr ? <span>+{item.incr}</span> : <span> --</span>}</div>
                  <strong className="count">{item.count}</strong>
                  <div className="label">{item.label}</div>
                </CountItem>
              ))
            }
          </div>
        </InfoTop>
        <InfoTab>疫情地图</InfoTab>
        <InfoBox>
          <div ref={self => this.mapID = self} id="map" style={{ height: '300px' }}></div>
        </InfoBox>
      </Fragment>
    )
  }

  componentDidMount() {
    this.props.getOverAllData()
    let chart = echarts.init(this.mapID);
    chart.setOption(this.getOption());
  }

  getOption() {
    const dataList = [{
      name: "南海诸岛",
      value: 0
    },
    {
      name: '北京',
      value: 54
    },
    {
      name: '天津',
      value: 13
    },
    {
      name: '上海',
      value: 40
    },
    {
      name: '重庆',
      value: 75
    },
    {
      name: '河北',
      value: 13
    },
    {
      name: '河南',
      value: 83
    },
    {
      name: '云南',
      value: 11
    },
    {
      name: '辽宁',
      value: 19
    },
    {
      name: '黑龙江',
      value: 15
    },
    {
      name: '湖南',
      value: 69
    },
    {
      name: '安徽',
      value: 60
    },
    {
      name: '山东',
      value: 39
    },
    {
      name: '新疆',
      value: 4
    },
    {
      name: '江苏',
      value: 31
    },
    {
      name: '浙江',
      value: 104
    },
    {
      name: '江西',
      value: 36
    },
    {
      name: '湖北',
      value: 1052
    },
    {
      name: '广西',
      value: 33
    },
    {
      name: '甘肃',
      value: 7
    },
    {
      name: '山西',
      value: 9
    },
    {
      name: '内蒙古',
      value: 7
    },
    {
      name: '陕西',
      value: 22
    },
    {
      name: '吉林',
      value: 4
    },
    {
      name: '福建',
      value: 18
    },
    {
      name: '贵州',
      value: 5
    },
    {
      name: '广东',
      value: 98
    },
    {
      name: '青海',
      value: 1
    },
    {
      name: '西藏',
      value: 0
    },
    {
      name: '四川',
      value: 44
    },
    {
      name: '宁夏',
      value: 4
    },
    {
      name: '海南',
      value: 22
    },
    {
      name: '台湾',
      value: 3
    },
    {
      name: '香港',
      value: 5
    },
    {
      name: '澳门',
      value: 5
    }
    ]

    echarts.registerMap('china', chinaJson)
    return {
      tooltip: {
        triggerOn: "click",
        textStyle:{
          fontSize: 12,
        },
        formatter: function (e, t, n) {
          return .5 === e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
        }
      },
      visualMap: {
        min: 0,
        max: 1000,
        left: 6,
        bottom: 0,
        showLabel: !0,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 5,
        textStyle:{
          fontSize: 9,
        },
        pieces: [{
          min: 1001,
          color: '#4f070d'
        },
        {
          min: 501,
          max: 1000,
          color: '#811c24'
        },
        {
          min: 251,
          max: 500,
          color: '#cb2a2f'
        },
        {
          min: 101,
          max: 250,
          color: '#e55a4e'
        },
        {
          min: 11,
          max: 100,
          color: '#f59e83'
        },
        {
          min: 1,
          max: 10,
          color: '#fdebcf'
        },
        {
          value: 0,
          color: 'white'
        }],
        show: !0
      },
      geo: {
        map: "china",
        roam: !1,
        scaleLimit: {
          min: 1,
          max: 2
        },
        zoom: 1.23,
        top: 40,
        label: {
          normal: {
            show: !0,
            fontSize: "8",
            color: "rgba(0,0,0,0.7)"
          }
        },
        itemStyle: {
          normal: {
            borderColor: "rgba(0, 0, 0, 0.2)"
          },
          emphasis: {
            areaColor: "#f2d5ad",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            borderWidth: 0
          }
        }
      },
      series: [{
        name: "确诊病例",
        type: "map",
        geoIndex: 0,
        data: dataList
      }]
    }

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