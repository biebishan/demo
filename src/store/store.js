
import { createStore, applyMiddleware, combineReducers } from 'redux';
import about from '../reducers/about'
import product from '../reducers/product'
import user from '../reducers/user'
const reducer = combineReducers({
    about,
    product,
    user
})
console.log('reducer', reducer)
let store = createStore(reducer);
export default store
// const state = store.getState();