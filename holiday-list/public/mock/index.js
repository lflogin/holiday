const Mock = require('mockjs');

const isshow = [true,false];
const state = ['工作日加班','调休'];
const list = Mock.mock({
  'tday|10': [
    {
      'name': '@cname',
      'id|+1': 1,
      'isCheck|+1': isshow,
      'time': '2019/5/23',
      'isState|+1': state,
      'num|1-9': 1
    }
  ]
})

module.exports = list;
 