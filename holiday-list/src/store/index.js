import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arr: ['加班', '休假'],
    ind: 0,
    list: [], // 存放全部数据
    newArr: [], // 存放tab切换数据
    newList: []
  },
  mutations: {
    // axios
    addaxios (state, data) {
      state.list = data
      // 对比数据
      if (state.newList.length) {
        state.list = state.newList
      }
      state.newArr = state.list.filter(item => item.isCheck)
    },
    // tab 切换
    tabadd (state, index) {
      state.ind = index
      if (state.ind === 0) {
        state.newArr = state.list.filter(item => item.isCheck)
      } else {
        state.newArr = state.list.filter(item => !item.isCheck)
      }
    },
    // 提交新的申请表
    addvuex (state, item) {
      state.newList = [...state.list, item]
      // console.log(state.newList, 'vuex------------')
    }
  },
  actions: {
    addaxios ({ commit }) {
      axios.get('/api/list').then(res => {
        // console.log(res.data.tday)
        commit('addaxios', res.data.tday)
      })
    }
  },
  modules: {
  }
})
