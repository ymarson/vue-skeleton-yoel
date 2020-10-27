<template>

<div class="section-list-item">
    test
</div>

</template>  
<script>
import axios from 'axios';

export default {
  name: 'SampleComponent',
  props: [''],
  data () {
    //this.getData();  
    return {
      dummy: ''
    }     
    
    
  },
  methods: {
    async getData () {
      try {
        const res = await axios.post(
          'http://localhost:3000', {
          query: 'query bla { bla }'
        })
        console.log(res.data);
        this.dummy = res.data.data.owner.dummy;

      } catch (e) {
        console.log('err', e)
      }
     }, 
   
  }  
}
</script>
<style>   

</style>