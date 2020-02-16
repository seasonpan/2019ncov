import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  list: ['疫情地图', '辟谣信息', '实时播报'],
  active: 0,
  headerHeight: 0,
  newsOffSetHeight: 0,
  rumorOffSetHeight: 0,
  mapLoading: true,
  overAllNum: [
    {
      label: '现存确诊',
      color: '#d35030',
      count: '--',
      incr: null
    },
    {
      label: '现存疑似',
      color: '#d9830f',
      count: 16067,
      incr: 3342
    },
    {
      label: '治愈人数',
      color: '#72b6a4',
      count: 5034,
      incr: 1036
    },
    {
      label: '累计确诊',
      color: '#93262b',
      count: 44763,
      incr: 2055
    },
    {
      label: '现存重症',
      color: '#8f5b4e',
      count: 8204,
      incr: 871
    },
    {
      label: '死亡人数',
      color: '#647191',
      count: 1115,
      incr: 98
    }
  ],
  updateTime: 1581511285083,
  newsLoading: true,
  newsList: [
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
  ],
  rumorLading: true,
  rumorList: [
    {
      "title": "喝茶可以预防新冠病毒？",
      "mainSummary": "丁香医生团队辟谣：补水挺好，预防病毒没用",
      "body": "目前尚无证据证明喝茶可以预防新冠病毒。尽量保持室内空气流通，注意卫生，勤洗手，吃熟食，远离人群就是最好的预防手段了。",
      "rumorType": 0,
      "sourceUrl": ""
    },
    {
      "title": "新冠病毒通过眼神对视传播？",
      "mainSummary": "丁香医生团队辟谣：系编造，造谣网民已被依法处罚。",
      "body": "在国家卫健委印发的《新型冠状病毒感染的肺炎诊疗方案（试行第四版）》中显示，新型冠状病毒经呼吸道飞沫传播是主要的传播途径，亦可通过接触传播。而眼神对视不属于前述任何一种。\n另外，造谣网民已被依法处罚。",
      "rumorType": 0,
      "sourceUrl": ""
    },
    {
      "title": "晒太阳可以杀灭新型冠状病毒？",
      "mainSummary": "丁香医生团队辟谣：太阳的照射温度达不到 56℃，且日照紫外线也达不到紫外线消毒灯的强度",
      "body": "太阳的照射温度达不到56℃，且日照紫外线也达不到紫外线消毒灯的强度，不论从哪一个角度都不能达到杀灭病毒的要求。若要外出晒太阳，仍需戴好口罩，做好必要防护。",
      "rumorType": 0,
      "sourceUrl": ""
    },
    {
      "title": "中国被列入「疫区国」？",
      "mainSummary": "丁香医生团队辟谣：根本没有「疫区国」的概念",
      "body": "针对此次新型病毒感染，WHO尚未发表中国为「疫区」的声明。很多人在讨论的PHEIC翻译过来是「国际公共卫生紧急事件」，是世卫组织发出的警示信息。根据《国际卫生条例（2005）》规定，PHEIC只是给各国的建议，不是强制措施。",
      "rumorType": 0,
      "sourceUrl": ""
    },
    {
      "title": "武汉来的快递要拒收？",
      "mainSummary": "丁香医生团队辟谣：病毒通过快件传播的风险极低，收完快件请及时洗手",
      "body": "国家邮政局市场监管司副司长侯延波表示：“我们要求邮政和快递企业严格落实对邮件、快件、运输车辆、生产作业场所的消毒、通风等措施，严格落实安全查验的制度，严禁收寄野生动物。因此大家不用担心，正常的快件不用拒收，收完快件请及时洗手。”",
      "rumorType": 0,
      "sourceUrl": ""
    },
    {
      "title": "散步会感染新型冠状病毒肺炎？",
      "mainSummary": "武汉市第九医院辟谣：我院没出过这样的通知",
      "body": "网上出现了武汉市第九医院的一个紧急通知，说是散步会感染新型冠状病毒肺炎。\n\n对此，武汉市第九医院院长刘明瑜表示：“这是谣言，我们根本没出这样的通知，请大家不要相信。\"",
      "rumorType": 0,
      "sourceUrl": ""
    },
    {
      "title": "别吃鱼，某地有121个鱼塘感染？",
      "mainSummary": "丁香医生团队查证：青海、南宁、丽江等各城市版本的均为编造。正规渠道售卖的仍可放心吃。",
      "body": "青海、南宁、丽江等各城市版本的均为编造。另外，此次新型冠状病毒来源是非法销售的野生动物，目前未明确中间宿主。但正规渠道售卖的各类肉制品仍可彻底煮熟后食用。",
      "rumorType": 0,
      "sourceUrl": ""
    },
    {
      "title": "私人邮寄口罩被海关征用？",
      "mainSummary": "上海海关辟谣：海关不会征用你的口罩！",
      "body": "遇到此类谣言该怎么办？\n请务必记住这个「灵魂三拷问」\n1、有没有单号？\n2、包裹寄到那个地区？\n3、哪家快递公司承运的？\n\n无论对方提供与否，大家都可以第一时间向官方求证，并提供相关情况，切勿在网上进行二次传播。",
      "rumorType": 0,
      "sourceUrl": ""
    },
    {
      "title": "治疗主要靠激素，会成为废人？",
      "mainSummary": "李兰娟院士辟谣：现在发生的大量的病人根本就不用激素",
      "body": "非典时期，激素治疗使部分患者留下股骨头坏死的后遗症，这是药物的一种副作用。现在发生的大量的病人根本就不用激素，所以不会引起股骨头坏死。",
      "rumorType": 0,
      "sourceUrl": ""
    },
    {
      "title": "用了7天的N95口罩消毒可继续用？",
      "mainSummary": "丁香医生团队辟谣：吹风机吹或者喷洒酒精，都可能破坏口罩的保护作用",
      "body": "美国疾控中心指出N95口罩在特殊情况下（比如口罩供应不足等），可在严格规范下「延长使用期限」以及「有限重复使用」。前者指一次佩戴不取下来，去接触不同的病人；后者指在满足一定条件下，可重复使用一定次数。若厂家说明了可重复使用次数，那以厂家说的为准；若没说明，那「不超过5次」。7天大大超过了这个次数。吹风机吹或者喷洒酒精，都可能会破坏口罩的保护作用。",
      "rumorType": 0,
      "sourceUrl": ""
    }
  ]
})

const getOverAllData = (state, action) => {
  let numList = [
    {
      label: '现存确诊',
      color: '#d35030',
      count: action.value.currentConfirmedCount,
      incr: action.value.currentConfirmedIncr
    },
    {
      label: '现存疑似',
      color: '#d9830f',
      count: action.value.suspectedCount,
      incr: action.value.suspectedIncr
    },
    {
      label: '治愈人数',
      color: '#72b6a4',
      count: action.value.curedCount,
      incr: action.value.curedIncr
    },

    {
      label: '累计确诊',
      color: '#93262b',
      count: action.value.confirmedCount,
      incr: action.value.confirmedIncr
    },
    {
      label: '现存重症',
      color: '#8f5b4e',
      count: action.value.seriousCount,
      incr: action.value.seriousIncr
    },
    {
      label: '死亡人数',
      color: '#647191',
      count: action.value.deadCount,
      incr: action.value.deadIncr
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

const getRumorData = (state, action) => {
  return state.merge({
    rumorList: fromJS(action.list),
    rumorLading: false
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
    case actionTypes.CHANGE_RUMOR_DATA:
      return getRumorData(state, action)
    case actionTypes.CHANGE_HEADER_HEIGHT:
      return state.set('headerHeight', action.value)
    case actionTypes.CHANGE_NEWS_HEIGHT:
      return state.set('newsOffSetHeight', action.value)
    case actionTypes.CHANGE_RUMOR_HEIGHT:
      return state.set('rumorOffSetHeight', action.value)
    default:
      return state
  }
}