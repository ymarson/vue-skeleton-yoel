<template>
 <div>
    <SampleComponent />
  </div>
</template>

<script>
import {useStore } from 'vuex';
import {computed} from 'vue'; 

import SampleComponent from '../components/SampleComponent.vue'

export default {
  setup(){
    const store = useStore();
    const dummy_state_variable = computed(() => store.state.dummy_state_variable);

    function update_dummy(val){
    
      store.commit("update_dummy",val);
    }
    return { dummy_state_variable, update_dummy }
  },
  name: 'App',
  components: {
    SampleComponent
    
  },
  data () {
    
  },
  methods: {
    
  }    
  
}

</script>