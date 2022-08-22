import store  from './store';




store.dispatch({
    type: 'BUG_ADDED',
    payload: {
        description: 'Bug1'
    }
})
console.log(store.getState());