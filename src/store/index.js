
import { createStore } from 'vuex'

export default createStore({
  state: {

  carName: '',
  carModel: '',
  carNick:'',
  },
  getters: {
  },
  mutations: {
    setCarName(state, newData) {
      state.carName = newData
},
setCarModel(state, newData) {
  state.carModel = newData
},
setCarNick(state, newData) {
  state.carNick = newData
}

}
})
