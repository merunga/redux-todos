import {createStore } from 'redux';

const calcState = {
    value: 0,
    btns: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "*", "/","=", ".", "+", "C"]
  } 
  
  const calcReducer = (state = calcState, action) => {
      console.log('state',state)
      console.log('action',action)
    switch(action.type){
        case 'ADD_ELEM':
            return{
                ...state,
                value: state.value === 0 ? action.text : state.value + action.text
            }
        case 'CLEAR':
            return{
                ...state,
                value: 0
            }
        case 'EQUAL':
            return{
                ...state,
                value: eval(action.value)
            }
        default:
            return state;
    }
  }

  const nose = createStore(calcReducer);
  console.log('no sé porque no funciona!!!',nose)
  export default nose;