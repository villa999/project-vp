import axios from 'axios'

export default function loadData () {
     const data = axios({
          method: 'get',
          url: 'https://jsonplaceholder.typicode.com/posts',
          data: null    
     }).catch((err)=>{
          console.log(err)
     })
     return data
}



