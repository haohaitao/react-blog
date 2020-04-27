import * as constants  from './constans'

const stateDefault = {
  menu_state:false,
}

export default (state=stateDefault,action)=>{
  if(action.type === constants.IS_MENU_STATE){
    const newState = JSON.parse(JSON.stringify(state))//深拷贝state
    newState.menu_state = action.data
    return newState
  }
  return state;
}
