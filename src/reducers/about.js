const initState = {
    initValue: '这是about',
    listData: ['1111']
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'query_data':
            return Object.assign({}, state, { listData: action.value })
        case 'login':
            console.log('11231');
        default:
            return state;

    }
};

export default reducer