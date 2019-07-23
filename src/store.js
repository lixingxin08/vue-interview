import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    setData (state, rsp) {
      rsp.forEach(element => {
        state.dataList.push(element)
      })
      console.log(state.dataList)
      return state.dataList
    }
  },
  getters: {
    getAverage: state => {
      let average = 0
      for (let index = 0; index < state.dataList.length; index++) {
        average += state.dataList[index].data
      }
      return Math.ceil(average / state.dataList.length * 100) / 100
    },
    getData: state => state.dataList
  },
  actions: {
    async  getDataCall (context, startIndex, number) {
      // TODO
      mockGenerator(startIndex = 0, number).then(rsp => {
        console.log(rsp)
        console.log(111)

        context.commit('setData', rsp)
      }).catch(error => {
        console.log(error)
      })
      console.log(context.state.dataList)
    }
  }
})
