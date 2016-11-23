let gid = 0;
const toDosReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
        // 保证 reducer是一个pure func -> 不能更改传入的值 state 和 action的值
            let newState = [...state, {id: ++gid, text: action.text, completed: false}];
            return newState;
        case 'TOGGLE_TODO':
            let newState2 = state.map((item) => {
                if (item.id === action.id) {
                    // state的值和它内部的元素的值和action的值都不能变
                    return Object.assign({}, item, {completed: !item.completed})
                }
                return item;
            });
            return newState2;
        default:
            return state;

    }
}
export default toDosReducer;