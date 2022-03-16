import {ADD_DATA,REMOVE_DATA} from '../constant'
import axios from 'axios';
export let addData = (data) => {
    return {
        type: ADD_DATA,
        data: data
    }
}


// export let removeData = () => {
//     console.log('action')

//     return {
//         type: REMOVE_DATA,
//     }
// }



export let removeData = () => {
    console.log('action')

    return async(dispatch)=>{
       await axios.get('https://jsonplaceholder.typicode.com/todos')
       .then(res=>{
           
           dispatch({type:REMOVE_DATA,data:res.data})
       
    })
       .catch(e=>{console.log(e,'e')})
    }
}