import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  list: ['疫情地图', '实时播报', '辟谣信息', '关于'],
  active: 0
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NAV_ACTIVE:
      return state.set('active', action.value)
    default:
      return state
  }
}