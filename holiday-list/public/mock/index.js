const Mock = require('mockjs');

const isshow = [true,false]
const list = Mock.mock({
  'tday|10': [
    {
      'name': '@cname',
      'id|+1': 1,
      'isCheck|+1': isshow
    }
  ]
})

module.exports = list;
 