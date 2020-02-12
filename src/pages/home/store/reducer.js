import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  list: ['疫情地图', '实时播报', '辟谣信息'],
  active: 0,
  loading: true,
  overAllNum: [
    {
      label: '全国确诊',
      color: '#d35030',
      count: 44763,
      incr: 2055
    },
    {
      label: '疑似病例',
      color: '#d9830f',
      count: 16067,
      incr: 3342
    },
    {
      label: '重症人数',
      color: '#8f5b4e',
      count: 8204,
      incr: 871
    },
    {
      label: '死亡人数',
      color: '#647191',
      count: 1115,
      incr: 98
    },
    {
      label: '治愈人数',
      color: '#72b6a4',
      count: 5034,
      incr: 1036
    }
  ],
  updateTime: 1581511285083
})

const getOverAllData = (state, action) => {
  let numList = [
    {
      label: '全国确诊',
      color: '#d35030',
      count: action.value.confirmedCount,
      incr: action.value.confirmedIncr
    },
    {
      label: '疑似病例',
      color: '#d9830f',
      count: action.value.suspectedCount,
      incr: action.value.suspectedIncr
    },
    {
      label: '重症人数',
      color: '#8f5b4e',
      count: action.value.seriousCount,
      incr: action.value.seriousIncr
    },
    {
      label: '死亡人数',
      color: '#647191',
      count: action.value.deadCount,
      incr: action.value.deadIncr
    },
    {
      label: '治愈人数',
      color: '#72b6a4',
      count: action.value.curedCount,
      incr: action.value.curedIncr
    }
  ]

  return state.merge({
    overAllNum: fromJS(numList),
    updateTime: action.value.updateTime,
    loading: false
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NAV_ACTIVE:
      return state.set('active', action.value)
    case actionTypes.CHANGE_OVERALL_DATA:
      return getOverAllData(state, action)
    default:
      return state
  }
}