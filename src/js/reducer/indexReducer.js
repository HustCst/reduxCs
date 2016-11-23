import {combineReducers} from 'redux';
import toDosReducer from './toDosReducer.js';
import visiableFilterReducer from './visiableFilterReducer.js';


// 是一个能把多个reducer结合的一个函数它本身接受一个参数此参数是一个对象对象中的每一个元素都是一个reducer。 
// 因为reducer是一个pure函数 返回state。所以combineReducer返回的也应该是一个函数并且才函数返回值是一个state。

// const combineReducers = (reducers) => {
//     return (state = {}, action) => {
//         let newState = {};
//         Object.keys(reducer).forEach( (key) => {
//             // toDosList visiableFilterList
//             console.log(key);
//             // 如 {}.toDosList = {toDosList: toDosReducer,visiableFilterList : visiableFilterReducer}.toDosList(state.toDosList, action)
//             newState[key] = reducers[key](state[key], action);
//         })
//         // newState -> {toDosList: [], visiableFilterList: ''}
//         return newState;
//     }
// };

//把多个reducer 的 getState() 返回的值结合在一起 属性是下面你定义的属性如:toDosList
export default combineReducers({
    toDosList: toDosReducer,
    visiableFilterText : visiableFilterReducer
})
