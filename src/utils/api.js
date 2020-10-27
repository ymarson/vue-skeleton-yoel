import axios from 'axios';
import { print } from 'graphql';
import gql from 'graphql-tag';

async function addSomething(){
    try {
      const ADD_STH = gql`
          mutation addSomething($dummy_id: Int!) {
              addSomething(dummy_id:$dummy_id) { 
                  id
              }
          }`

      const res = await axios.post(
        'http://localhost:3000', {

          query: print(ADD_STH),
              variables: {
                  dummy_id: dummy_id
                  
              },
                      
      })
      console.log(res.data);

    } catch (e) {
      console.log('err', e)
    }
}  

export  { addSomething };