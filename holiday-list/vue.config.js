
const list = require('./public/mock/index')

module.exports = {
  devServer: {
    before (app) {
      // 数据接口
      app.get('/api/list', (req, res) => {
        res.json(list)
      })
      // 详情接口
      app.get('/api/detail', (req, res) => {
        const { id } = req.query
        const flag = list.tday.find(item => item.id == id)
        res.json(flag)
      })
    }
  }
}