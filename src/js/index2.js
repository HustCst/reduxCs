import {createStore} from 'redux';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import rootReducer from './reducer/indexReducer.js';
import FilterLink from './Components/FilterLink.js';

// react redux demo1

// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREASE':
//             return state + 1;
//         case 'DECREASE':
//             return state - 1;
//         default: 
//             return state; 
//     }
// }

// const store = createStore(reducer);


// class Counter extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{store.getState()}</h1>
//                 <button onClick={ () => {store.dispatch({type: 'INCREASE'})} }>+</button>
//                 <button onClick={ () => {store.dispatch({type: 'DECREASE'})} }>-</button>
//             </div>
//         )
//     }
// }

// const renderDom = () => {
//     ReactDom.render(
//         <Counter/>,
//         document.getElementById('demo')
//     );
// }

// store.subscribe(renderDom);

// renderDom();
// let gid = 0;
// const toDosReducer = (state = [], action) => {
//     switch(action.type) {
//         case 'ADD_TODO':
//         // 保证 reducer是一个pure func -> 不能更改传入的值 state 和 action的值
//             let newState = [...state, {id: ++gid, text: action.text, completed: false}];
//             return newState;
//         case 'TOGGLE_TODO':
//             let newState2 = state.map((item) => {
//                 if (item.id === action.id) {
//                     // state的值和它内部的元素的值和action的值都不能变
//                     return Object.assign({}, item, {completed: !item.completed})
//                 }
//                 return item;
//             });
//             return newState2;
//         default:
//             return state;

//     }
// }

// var store = createStore(toDosReducer);
// 测试 reducer
// console.log(store.getState());
// store.dispatch({
//     type: 'ADD_TODO',
//     text: 'cst'    
// })
// console.log(store.getState());
// store.dispatch({
//     id: 1,
//     type: 'TOGGLE_TODO',
// });
// console.log(store.getState());

// class App extends Component {
//     render() {
//         var todoList = store.getState();
//         return (
//             <div>
//                 <input type='text' ref='Inp'/>
//                 <button onClick={ () => {
//                     store.dispatch({type: 'ADD_TODO', text: this.refs.Inp.value});
//                 }}>Add</button>
//                 <ul>
//                     {todoList.map((item, key) => {
//                         return (
//                             <li style={ {textDecoration: item.completed ? 'line-through': 'none'} } key={item.id} onClick={ () => {store.dispatch({id: item.id, type: 'TOGGLE_TODO'})} }>
//                                 {item.text}
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }


// const render = () => {
//     ReactDom.render(
//         <App/>,
//         document.getElementById('demo')
//     )
// }
// render();

// store.subscribe(render);




// combinereducer
let store = createStore(rootReducer);
// 利用combineReducer 后会把两个reducer -> createStore后 调用getState() 的值结合在一起
// console.log(store.getState());


// 切换 按钮 每次点击SHOW* 按钮时候都会触发重新渲染的函数所以也会执行下面的过滤函数
const filterClick = (filter) => {
    store.dispatch({
        type: 'SET_VISIABLEFILTER',
        filter: filter
    })
}

// 过滤add 后添加的数据, 根据数据visableFilterText 过滤数据
const filterToDoList = (toDoList, visiableFilterText) => {
    switch (visiableFilterText) {
        case 'SHOW_COMPLETED':
            return toDoList.filter((ele) => {
                return !ele.completed;
            });
        case 'SHOW_ACTIVE':
            return toDoList.filter((ele) => {
                return ele.completed;
            });
        case 'SHOW_ALL':
        default:
                return toDoList;

    }
}

class App extends Component {
    render() {
        let {toDosList, visiableFilterText} = store.getState();
        // 过滤数据
        toDosList = filterToDoList(toDosList, visiableFilterText);
        return (
            <div>
                <input type='text' ref='Inp'/>
                <button onClick={ () => {
                    store.dispatch({type: 'ADD_TODO', text: this.refs.Inp.value});
                }}>Add</button>
                <ul>
                    {toDosList.map((item, key) => {
                        return (
                            <li style={ {textDecoration: item.completed ? 'line-through': 'none'} } key={item.id} onClick={ () => {store.dispatch({id: item.id, type: 'TOGGLE_TODO'})} }>
                                {item.text}
                            </li>
                        );
                    })}
                </ul>
                <FilterLink filterClick={filterClick} filter='SHOW_ALL' currentFilter={visiableFilterText}>Show All</FilterLink>
                <FilterLink filterClick={filterClick} filter='SHOW_COMPLETED' currentFilter={visiableFilterText}>Show Completed</FilterLink>
                <FilterLink filterClick={filterClick} filter='SHOW_ACTIVE' currentFilter={visiableFilterText}>Show Active</FilterLink>
            </div>
        )
    }
}


const render = () => {
    ReactDom.render(
        <App/>,
        document.getElementById('demo')
    )
}
render();

store.subscribe(render);



