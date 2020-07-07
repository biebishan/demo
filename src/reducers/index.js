import { createStore } from 'redux';
const initState = {
    initValue:'这是初始数据',
    listData:['1111']
}
const reducer = (state = initState, action) => {
  switch (action.type) {   
    case 'query_data':     
      return Object.assign({}, state, {
    listData:action.value
})   
    default:      
      return state; 

}};

// const store = createStore(reducer); // 生成store时传入reducer
export default reducer