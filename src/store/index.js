import {createStore } from 'redux';

const calcState = {
    value: 0,
    numbers: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "*", "/","=", ".", "+", "C"]
  } 
  
  const reducer = (state = calcState, action) => {
     // console.log('state',state)
      //console.log('action',action)
    switch(action.type){
        case 'SHOW_ELEM':
            return{
                ...state,
                value: state.value === 0 ? action.text : state.value + action.text
            }
        case 'EMPTY_NUM':
            return{
                ...state,
                value: 0
                //value: state.value.length <= 1 ? '' : state.value.slice(0,-1)
            }
        case 'EVAL_STRING':
            return{
                ...state,
                value: eval(action.value)
            }
        default:
            return state;
    }
  }

 const store = createStore(reducer);
 
 export default store;
