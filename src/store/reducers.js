import * as constants  from './constans'

const stateDefault = {
  state:true,
}

export default (state=stateDefault,action)=>{
  if(action.type === constants.SPIN_State){
    const newState = JSON.parse(JSON.stringify(state))//深拷贝state
    newState.state = action.value
    return newState
  }
  return state;
}
