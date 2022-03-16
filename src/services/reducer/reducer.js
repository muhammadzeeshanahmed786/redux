// import {ADD_DATA} from '../constant'
// let initialState = {
//     addData: [],
// }


// export default function addDataReducers(state = initialState,action) {
//     switch (action.type) {
//         case ADD_DATA:
//             console.log('reducers',action.data)
//             return {
//                 ...state,
//                 data:action.data
//             }
//             break;
//             default: return state
//     }
// }







import {ADD_DATA,REMOVE_DATA} from '../constant'
let initialState = {
    addData: [],
}


export default function addDataReducers(state = [],action) {
    switch (action.type) {
        case ADD_DATA:
            return [
                ...state,
                {data:action.data}
            ]
            case REMOVE_DATA:
            return [
                ...state,
                {data:action.data}
            ]
            default: return state
    }
}