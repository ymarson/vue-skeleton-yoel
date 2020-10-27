import { createStore } from 'vuex'

const state = {
  dummy: 1

} 

const mutations = {  
 
  update_dummy(state, val) {
    console.log('changing dummy to' + val);
    state.account.dummy = val;
  } 
}

export default createStore({
  state,
  mutations
})
