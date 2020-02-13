import * as actionTypes from './actionTypes'
import axios from 'axios'

export const changeNavActive = (value) => ({
  type: actionTypes.CHANGE_NAV_ACTIVE,
  value
})

export const changeOverAllData = (value) => ({
  type: actionTypes.CHANGE_OVERALL_DATA,
  value
})

export const changeNewsData = (list) => ({
  type: actionTypes.CHANGE_NEWS_DATA,
  list
})

export const changeRumorData = (list) => ({
  type: actionTypes.CHANGE_RUMOR_DATA,
  list
})

export const getOverAllData = () => {
  return (dispatch) => {
    axios.get('https://lab.isaaclin.cn/nCoV/api/overall').then(res => {
      const result = res.data.results[0]
      dispatch(changeOverAllData(result))
    }).catch(() => {
      console.log('get OverAll Data error')
    })
  }
}

export const getNewsData = () => {
  return (dispatch) => {
    axios.get('https://lab.isaaclin.cn/nCoV/api/news').then(res => {
      const result = res.data.results
      dispatch(changeNewsData(result))
    }).catch(() => {
      console.log('get News Data error')
    })
  }
}

export const getRumorData = () => {
  return (dispatch) => {
    axios.get('https://lab.isaaclin.cn/nCoV/api/rumors').then(res => {
      const result = res.data.results
      dispatch(changeRumorData(result))
    }).catch(() => {
      console.log('get News Data error')
    })
  }
}

