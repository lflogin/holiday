
const list = require('./public/mock/index')

module.exports = {
  devServer: {
    before(app) {
      app.get('/api/list',(req,res)=>{
        res.json(list)
      })
    }
  }
}