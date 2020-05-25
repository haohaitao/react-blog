import * as constants  from './constans'

const stateDefault = {
  loading_state:true,
  data:[], //接口返回
}

export default (state=stateDefault,action)=>{
  const newState = JSON.parse(JSON.stringify(state))//深拷贝state
  switch(action.type){
    case constants.SPIN_STATE:
      newState.loading_state = action.value;
      return newState;
    case constants.SAVE_PHOTO_DATA:
      newState.data = action.data;
      return newState;
    default:
      return state;
  }
}
