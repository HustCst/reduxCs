// import {createStore} from 'redux';


const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default: 
            return state; 
    }
}
// state 的值每次都是在上一个state基础上进行改变的
const createStore = (reducer) => {
    let state;
    let list = [];
    const getState = () => {
        return state;
    }
    const dispatch = (action) => {
        state = reducer(state, action);
        list.forEach((func) => {
            func();
        })
    }
    const subscribe = (func)=> {
        list.push(func);
        // subscribe的返回值 是个函数 执行此函数是可以传递参数（函数） 之后会过滤掉该函数
        return (fn) => {
            list = list.filter((cb) => {
                if (cb == fn) {
                    return false;
                }
                return true;
            })
        }
    }
    return {
        getState,
        dispatch,
        subscribe,
    }
}


const store = createStore(reducer);
store.dispatch({type: 'INIT'});

const render = () => {
    document.body.innerHTML = store.getState();
}

store.subscribe(render);

document.onclick = () => {
    store.dispatch({type: 'DECREASE'});
}
