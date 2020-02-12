import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  list: ['疫情地图', '辟谣信息', '实时播报'],
  active: 0,
  mapLoading: true,
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
  updateTime: 1581511285083,
  newsLoading: true,
  newsList:[
    {
      "title": "西藏唯一新冠肺炎患者治愈出院",
      "summary": "西藏唯一新冠肺炎患者治愈出院，实现确诊病例和疑似病例清零。2月12日下午，自治区卫生健康委党组书记王云亭在自治区第三人民医院现场接受央视网、新华网、人民日报、西藏卫视等媒体采访。王云亭书记表示，西藏唯一新冠肺炎患者治愈出院，标志着在全国31个省（自治区、直辖市）中，我区首先实现确诊病例和疑似病例清零。\n            \n        \n    ",
      "infoSource": "西藏卫健委",
      "sourceUrl": "http://wjw.xizang.gov.cn/xwzx/wsjkdt/202002/t20200212_132187.html",
      "pubDate": 1581506972000,
      "provinceName": "西藏自治区",
      "provinceId": "54"
    },
    {
      "title": "青海四名患者出院",
      "summary": "人民日报记者姜峰从青海省卫健委获悉，2月12日下午，四例新冠肺炎患者从青海省第四人民医院治愈出院，其中包括全省首例确诊患者。至此，青海省确诊的18例患者中已有9例出院，治愈率达50%。",
      "infoSource": "人民日报",
      "sourceUrl": "http://m.weibo.cn/2803301701/4471214594432686",
      "pubDate": 1581504093000,
      "provinceName": "青海省",
      "provinceId": "63"
    },
    {
      "title": "云南省新增确诊病例为零",
      "summary": "2月12日0时至12时，云南省报告新型冠状病毒肺炎新增确诊病例为零。全省累计报告确诊病例154例，除治愈出院者外，现均在定点医院接受隔离治疗。现有危重2例，重症15例，治愈出院23例，疑似病例69例，密切接触者医学观察2839人，无死亡病例。",
      "infoSource": "云南卫健委",
      "sourceUrl": "http://ynswsjkw.yn.gov.cn/wjwWebsite/web/doc/UU158149724685341457",
      "pubDate": 1581498102000,
      "provinceName": "云南省",
      "provinceId": "53"
    },
    {
      "title": "重庆市新增确诊4例，累计确诊509例；新增治愈8例，累计治愈87例。",
      "summary": "2020年2月12日0—12时，重庆市报告新冠肺炎新增确诊病例4例，新增出院病例8例。新增确诊病例中，万州区1例、南岸区1例、綦江区2例；新增出院病例中，万州区1例、开州区1例、梁平区1例、忠县1例、云阳县1例、巫溪县2例、两江新区1例。截至2月12日12时，重庆市累计报告新冠肺炎确诊病例509例；现有重型病例29例，危重型病例24例，死亡病例3例，出院病例87例。累计追踪到密切接触者18092人，已解除医学观察11349人，尚有6743人正在接受医学观察。具体情况如下：\n            \n        ",
      "infoSource": "重庆卫健委",
      "sourceUrl": "http://wsjkw.cq.gov.cn/yqxxyqtb/20200212/253777.html",
      "pubDate": 1581497212000,
      "provinceName": "重庆市",
      "provinceId": "50"
    },
    {
      "title": "天津市新增确诊3例，累计确诊110例",
      "summary": "2月12日6时至15时，天津市新增新冠肺炎确诊病例3例，累计确诊病例110例。目前已对判定的密切接触者进行隔离医学观察，其他密切接触者排查和流行病学调查工作正在进行中。\n",
      "infoSource": "天津卫健委",
      "sourceUrl": "http://wsjk.tj.gov.cn/art/2020/2/12/art_87_70801.html",
      "pubDate": 1581496904000,
      "provinceName": "天津市",
      "provinceId": "12"
    },
    {
      "title": "治愈比例上升至10.6%",
      "summary": "国务院举行联防联控机制发布会，国家卫生健康委新闻发言人、宣传司副司长米锋：当前疫情形势依然十分严峻，但在一系列有利措施的推动下，疫情形势总体上也出现了一些积极变化。新增报告的病例波动下降，治愈出院人数较快增长。治愈比例由最低时1月27日1.3%，上升到2月11日的10.6%。\n",
      "infoSource": "央视新闻",
      "sourceUrl": "http://m.weibo.cn/2656274875/4471161914001154",
      "pubDate": 1581491533000,
      "provinceName": "全国",
      "provinceId": "100"
    },
    {
      "title": "西藏唯一确诊病例治愈出院",
      "summary": "今天下午，西藏唯一确诊新冠肺炎病例张某某，办理完所有治愈出院手续，离开西藏自治区第三人民医院。据西藏自治区第三人医院肺二科主任、救治组组长花德米介绍说，该病例2月9日第一次检测结果为是阴性，2月11日重新检测结果依然是阴性，目前包括CT等临床证据都显示已病愈，临床组经过讨论并上报医院和西藏自治区卫健委，经过自治区和上海北京专家评估后，该病例达到治愈出院标准。",
      "infoSource": "人民日报",
      "sourceUrl": "http://m.weibo.cn/2803301701/4471151104967663",
      "pubDate": 1581488956000,
      "provinceName": "西藏自治区",
      "provinceId": "54"
    },
    {
      "title": "日本邮轮新增39例，累计确诊203例",
      "summary": "据日本共同社消息：日本厚生劳动省12日宣布，日本邮轮新增39例新冠肺炎。已从“钻石公主号”邮轮被送往医疗机构的搭乘者中，4人为重症患者。日本国内感染者总计达203人。据日本放送协会消息，203人中包括174名邮轮乘客和乘务员、1名在船内进行检疫的检疫官、12名日本包机从湖北返回的日本人和其他16名游客。（总台央视记者何欣蕾）\n",
      "infoSource": "央视新闻",
      "sourceUrl": "http://m.weibo.cn/2656274875/4471110928455186",
      "pubDate": 1581479376000,
      "provinceName": null,
      "provinceId": "1"
    },
    {
      "title": "湖北新增病例2连降",
      "summary": "据湖北省卫健委数据统计，2月9日—2月11日，湖北省新增新冠肺炎病例连续下降2天，2月9日为2618例，2月10日为2097例，2月11日为1638例。",
      "infoSource": "人民日报",
      "sourceUrl": "http://m.weibo.cn/2803301701/4471095925393575",
      "pubDate": 1581475800000,
      "provinceName": "湖北省",
      "provinceId": "42"
    },
    {
      "title": "北京新增10例，累计352例",
      "summary": "2月11日0时至24时，本市新增10例新冠肺炎确诊病例，截至2月11日24时,本市累计确诊病例352例。其中出院56例，死亡3例，293例在定点医院进行隔离治疗。",
      "infoSource": "北京卫健委",
      "sourceUrl": "",
      "pubDate": 1581474676000,
      "provinceName": "北京市",
      "provinceId": "11"
    }
  ]
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
    mapLoading: false
  })
}

const getNewsData = (state, action) => {
  return state.merge({
    newsList: fromJS(action.list),
    newsLoading: false
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NAV_ACTIVE:
      return state.set('active', action.value)
    case actionTypes.CHANGE_OVERALL_DATA:
      return getOverAllData(state, action)
    case actionTypes.CHANGE_NEWS_DATA:
      return getNewsData(state, action)
    default:
      return state
  }
}