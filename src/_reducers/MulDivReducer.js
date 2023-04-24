import { intialState } from "./initialState";


export const MulDivRedFunc = (oldState=intialState,action)=>{
    console.log('action.payload---->',action.payload);
    let newState = oldState;
    switch(action.type){
      case 'MULBY2':
        return {
          ...newState,
          value:newState.value*action.payload
        };
        break;
      case 'MULBY5':
        return {
          ...newState,
          value:newState.value*action.payload
        };
        break;
      case 'RESET':
        return {
          ...newState,
          value:action.payload
        };
        break;
      default:
        return newState;
    }
  
}