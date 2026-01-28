const questions = [
  {
    id: 1,
    type: 'single', // 单选
    question: '如果您接到自称是公检法机关的电话，称您涉嫌洗钱，要求您将资金转入“安全账户”，您应该怎么做？',
    options: [
      { label: 'A', content: '立即按要求转账' },
      { label: 'B', content: '挂断电话，不予理会或拨打110报警' },
      { label: 'C', content: '询问对方警号并保密' },
      { label: 'D', content: '向亲友借钱凑齐款项' }
    ],
    answer: 'B',
    explanation: '公检法机关不会通过电话办案，更没有所谓的“安全账户”。'
  },
  {
    id: 2,
    type: 'single',
    question: '收到短信称您的网购商品有质量问题，可以申请三倍赔偿，但需要点击链接填写银行卡信息，您应该？',
    options: [
      { label: 'A', content: '点击链接填写信息' },
      { label: 'B', content: '转发给朋友询问' },
      { label: 'C', content: '通过官方购物平台联系卖家核实' },
      { label: 'D', content: '直接回复短信骂对方' }
    ],
    answer: 'C',
    explanation: '退款赔偿应通过官方平台进行，切勿点击陌生链接输入敏感信息。'
  },
  {
    id: 3,
    type: 'single',
    question: '网络刷单是诈骗吗？',
    options: [
      { label: 'A', content: '是，百分之百是诈骗' },
      { label: 'B', content: '不是，是一种兼职' },
      { label: 'C', content: '看情况，正规平台不是' },
      { label: 'D', content: '不知道' }
    ],
    answer: 'A',
    explanation: '所有网络刷单都是诈骗，切勿贪图小便宜。'
  },
  {
    id: 4,
    type: 'judge', // 判断
    question: '为了方便记忆，可以将银行卡密码设置为生日或简单的连续数字。',
    options: [
      { label: 'A', content: '正确' },
      { label: 'B', content: '错误' }
    ],
    answer: 'B',
    explanation: '密码设置过于简单容易被破解，应设置复杂密码并定期更换。'
  },
  {
    id: 5,
    type: 'single',
    question: '如果你在网络交友中遇到“高富帅”或“白富美”，对方带你投资理财，保证稳赚不赔，这是什么？',
    options: [
      { label: 'A', content: '真爱来了' },
      { label: 'B', content: '杀猪盘诈骗' },
      { label: 'C', content: '难得的投资机会' },
      { label: 'D', content: '普通的理财推销' }
    ],
    answer: 'B',
    explanation: '典型的“杀猪盘”诈骗套路：先培养感情，再诱导投资，最后卷款跑路。'
  }
];

module.exports = {
  questions: questions
}
