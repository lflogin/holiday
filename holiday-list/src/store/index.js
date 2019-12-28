import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arr: ['加班','休假'],
    ind: 0,
    list: [],  //存放全部数据
    newArr: [] //存放tab切换数据
  },
  mutations: {
    //axios
    addaxios(state,data) {
      state.list = data
      state.newArr = state.list.filter(item=>item.isCheck)
    },
    //tab 切换
    tabadd(state,index) {
      state.ind = index;
      if(state.ind === 0) {
           state.newArr = state.list.filter(item=>item.isCheck)
          } else {
            state.newArr = state.list.filter(item=>!item.isCheck)
          }
    }
  },
  actions: {
  },
  modules: {
  }
})
