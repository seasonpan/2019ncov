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