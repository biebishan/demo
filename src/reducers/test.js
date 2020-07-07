import { createStore } from 'redux';
const initState = {
    sta
}
const reducer = (state = {}, action) => {

  switch (action.type) {   

    case 'student_age':     

      return state + action.age;   

    default:      

      return state; 

}};

const store = createStore(reducer); // 生成store时传入reducer