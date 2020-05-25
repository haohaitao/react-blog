import * as constans from './constans'
import * as http from '../../../common/http'

//改变加载状态
export const spinState = value => ({
  type: constans.SPIN_STATE,
  value
})

//拿到数据
export const getData = () => {
  return (dispatch) =>{
      dispatch(spinState(true))
      http.getJson('api/wp-json/wp/v2/pages/994','','').then( (res)=> {
        if(res.status === 200){
          res.data.content = res.data.content.rendered
          dispatch(save_data(res.data))
          dispatch(spinState(false))
        }
      })
  }
}

//存接口的数据
export const save_data = (data) => ({
  type: constans.SAVE_PHOTO_DATA,
  data
})